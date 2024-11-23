"""
Golf Shot Tracker gRPC Server

This module initializes and runs the gRPC server for the Golf Shot Tracker application.
It sets up the server with the ShotTrackerService and handles graceful shutdown.
"""

import grpc
from concurrent import futures
import logging
import time

from shot_tracker_service import ShotTrackerService
import golf_service_pb2_grpc

def serve():
    """
    Initialize and run the gRPC server.
    
    Creates a gRPC server with a thread pool executor, registers the ShotTrackerService,
    and runs indefinitely until interrupted.
    """
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    golf_service_pb2_grpc.add_ShotTrackerServiceServicer_to_server(
        ShotTrackerService(), server
    )
    server.add_insecure_port('[::]:50051')
    
    # Add logging
    print("Starting server on port 50051...")
    
    server.start()
    print("Server started successfully!")
    
    try:
        server.wait_for_termination()
    except KeyboardInterrupt:
        print("\nShutting down server...")
        server.stop(0)

if __name__ == '__main__':
    logging.basicConfig()
    serve()
