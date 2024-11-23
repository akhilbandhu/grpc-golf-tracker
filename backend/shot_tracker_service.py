"""
Golf Shot Tracker Service Implementation

This module implements the gRPC service definitions for the Golf Shot Tracker.
It handles shot recording, statistics calculation, and real-time shot streaming.
"""

import time
import uuid
import queue
import grpc
import golf_service_pb2
import golf_service_pb2_grpc

class ShotTrackerService(golf_service_pb2_grpc.ShotTrackerServiceServicer):
    """
    Implementation of the Shot Tracker gRPC service.
    
    This service handles:
    - Recording new golf shots
    - Calculating shot statistics
    - Streaming recent shots in real-time
    """

    def __init__(self):
        """Initialize the service with empty shots list and observers set."""
        self.shots = []  # Stores all recorded shots
        self._observers = set()  # Set of queues for streaming updates

    def RecordShot(self, request, context):
        """
        Record a new golf shot.
        
        Args:
            request (Shot): The shot details including club, distance, and result
            context: gRPC context
            
        Returns:
            ShotResponse: Response containing the recorded shot details
        """
        try:
            shot = golf_service_pb2.Shot(
                id=str(uuid.uuid4()),
                club=request.club,
                distance=request.distance,
                result=request.result,
                notes=request.notes,
                timestamp=int(time.time())
            )
            
            self.shots.append(shot)
            print(f"Shot recorded: {shot}")  # Debug logging
            
            return golf_service_pb2.ShotResponse(
                success=True,
                message="Shot recorded successfully",
                shot=shot
            )
        except Exception as e:
            print(f"Error recording shot: {e}")  # Debug logging
            context.set_code(grpc.StatusCode.INTERNAL)
            context.set_details(str(e))
            return golf_service_pb2.ShotResponse(
                success=False,
                message=f"Error: {str(e)}"
            )

    def GetStatistics(self, request, context):
        """
        Calculate statistics for recorded shots.
        
        Args:
            request (StatisticsRequest): Optional filters for club and date range
            context: gRPC context
            
        Returns:
            StatisticsResponse: Calculated statistics including averages and distributions
        """
        filtered_shots = []
        total_distance = 0
        result_distribution = {}
        
        for shot in self.shots:
            # Check if club filter matches
            if request.club != golf_service_pb2.Club.CLUB_UNSPECIFIED and shot.club != request.club:
                continue
            if request.from_date and shot.timestamp < request.from_date:
                continue
            if request.to_date and shot.timestamp > request.to_date:
                continue
                
            filtered_shots.append(shot)
            total_distance += shot.distance
            
            # Convert enum to string for the map key
            result_key = golf_service_pb2.ShotResult.Name(shot.result)
            result_distribution[result_key] = result_distribution.get(result_key, 0) + 1
        
        avg_distance = total_distance / len(filtered_shots) if filtered_shots else 0
        recent_shots = filtered_shots[-10:] if filtered_shots else []
        
        return golf_service_pb2.StatisticsResponse(
            average_distance=avg_distance,
            total_shots=len(filtered_shots),
            result_distribution=result_distribution,
            recent_shots=recent_shots
        )

    def StreamRecentShots(self, request, context):
        """
        Stream recent shots and provide real-time updates.
        
        Args:
            request (StreamRequest): Number of recent shots to include
            context: gRPC context
            
        Yields:
            Shot: Shot details as they are recorded
        """
        observer_queue = queue.Queue()
        self._observers.add(observer_queue)
        
        try:
            # First send existing shots
            for shot in self.shots[-request.limit:]:
                yield shot
            
            # Then wait for new shots
            while context.is_active():
                try:
                    shot = observer_queue.get(timeout=1.0)
                    yield shot
                except queue.Empty:
                    continue
        finally:
            self._observers.remove(observer_queue)
