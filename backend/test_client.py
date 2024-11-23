"""
Golf Shot Tracker Test Client

This module provides a test client for the Golf Shot Tracker gRPC service.
It demonstrates recording shots, retrieving statistics, and streaming updates.
"""

import grpc
import random
import time
import golf_service_pb2
import golf_service_pb2_grpc

def get_random_shot():
    """Generate a random golf shot with realistic distances for each club."""
    base_distances = {
        golf_service_pb2.Club.DRIVER: 250,
        golf_service_pb2.Club.THREE_WOOD: 215,
        golf_service_pb2.Club.FIVE_IRON: 180,
        golf_service_pb2.Club.SEVEN_IRON: 150,
        golf_service_pb2.Club.NINE_IRON: 120,
        golf_service_pb2.Club.PITCHING_WEDGE: 100,
    }
    
    club = random.choice(list(base_distances.keys()))
    distance = base_distances[club] * random.uniform(0.9, 1.1)
    
    results = [
        golf_service_pb2.ShotResult.FAIRWAY,
        golf_service_pb2.ShotResult.GREEN,
        golf_service_pb2.ShotResult.ROUGH,
        golf_service_pb2.ShotResult.BUNKER,
        golf_service_pb2.ShotResult.WATER,
        golf_service_pb2.ShotResult.OUT_OF_BOUNDS
    ]
    
    return golf_service_pb2.Shot(
        club=club,
        distance=round(distance, 1),
        result=random.choice(results),
        notes=f"Shot with {golf_service_pb2.Club.Name(club)}"
    )

def record_shot(stub):
    """Record a random shot and print the result."""
    shot = get_random_shot()
    response = stub.RecordShot(shot)
    print(f"Shot recorded: {golf_service_pb2.Club.Name(response.shot.club)} - "
          f"{response.shot.distance} yards - "
          f"{golf_service_pb2.ShotResult.Name(response.shot.result)}")

def get_statistics(stub):
    """Get and print shot statistics."""
    request = golf_service_pb2.StatisticsRequest()
    stats = stub.GetStatistics(request)
    print(f"\nStatistics:")
    print(f"Average distance: {stats.average_distance:.2f} yards")
    print(f"Total shots: {stats.total_shots}")
    print("Result distribution:")
    for result, count in stats.result_distribution.items():
        print(f"  {result}: {count}")

def stream_shots(stub):
    """Stream and print shot updates."""
    print("\nStreaming recent shots (press Ctrl+C to stop)...")
    request = golf_service_pb2.StreamRequest(limit=10)
    try:
        for shot in stub.StreamRecentShots(request):
            print(f"New shot: {golf_service_pb2.Club.Name(shot.club)} - "
                  f"{shot.distance} yards - "
                  f"{golf_service_pb2.ShotResult.Name(shot.result)}")
    except KeyboardInterrupt:
        print("\nStopped streaming")

def main():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = golf_service_pb2_grpc.ShotTrackerServiceStub(channel)
        
        print("Recording shots...")
        for _ in range(5):
            record_shot(stub)
            time.sleep(0.1)
        
        get_statistics(stub)
        stream_shots(stub)

if __name__ == '__main__':
    main()