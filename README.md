import grpc
import golf_service_pb2
import golf_service_pb2_grpc
from concurrent import futures

def record_shot(stub):
    shot = golf_service_pb2.Shot(
        club="7-IRON",
        distance=150.5,
        result="FAIRWAY",
        notes="Nice clean hit"
    )
    
    response = stub.RecordShot(shot)
    print(f"Shot recorded: {response.message}")
    print(f"Shot details: ID={response.shot.id}, Distance={response.shot.distance}")

def get_statistics(stub):
    request = golf_service_pb2.StatisticsRequest(
        club="7-IRON"  # Optional filter
    )
    
    stats = stub.GetStatistics(request)
    print(f"\nStatistics:")
    print(f"Average distance: {stats.average_distance:.2f} yards")
    print(f"Total shots: {stats.total_shots}")
    print("Result distribution:")
    for result, count in stats.result_distribution.items():
        print(f"  {result}: {count}")

def stream_shots(stub):
    print("\nStreaming recent shots (press Ctrl+C to stop)...")
    request = golf_service_pb2.StreamRequest(limit=10)
    try:
        for shot in stub.StreamRecentShots(request):
            print(f"New shot: {shot.club} - {shot.distance} yards - {shot.result}")
    except KeyboardInterrupt:
        print("\nStopped streaming")

def main():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = golf_service_pb2_grpc.ShotTrackerServiceStub(channel)
        
        # Record a few shots
        print("Recording shots...")
        for _ in range(3):
            record_shot(stub)
        
        # Get statistics
        get_statistics(stub)
        
        # Stream new shots
        stream_shots(stub)

if __name__ == '__main__':
    main()
