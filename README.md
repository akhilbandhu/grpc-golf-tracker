
# Golf Shot Tracker

A real-time golf shot tracking application using gRPC, React, and Python.

## Prerequisites

- Python 3.8+
- Node.js 16+
- Protocol Buffers compiler (protoc)
- Docker (for Envoy proxy)

## Project Structure
```text
golf-shot-tracker/
├── proto/ # Protocol Buffer definitions
│ └── golf_service.proto
├── backend/ # Python gRPC server
│ ├── generated/ # Generated Python code
│ ├── requirements.txt
│ └── server.py
├── frontend/ # React frontend
│ ├── src/
│ │ ├── generated/ # Generated TypeScript code
│ │ └── components/
│ └── package.json
├── scripts/
│ ├── generate-backend.sh
│ └── generate-frontend.sh
└── docker-compose.yml # Envoy proxy configuration
```

## Quick Start

1. Clone the repository:
```bash
git clone git@github.com:akhilbandhu/grpc-golf-tracker.git
cd grpc-golf-tracker
```
2. Run the setup script:
```bash
chmod +x setup.sh
./setup.sh
```

This will:
- Install all dependencies
- Generate code from Protocol Buffers
- Start the backend server
- Start the frontend development server
- Start the Envoy proxy

The application will be available at:
- Frontend: http://localhost:3000
- Backend: localhost:50051
- Envoy Proxy: localhost:8080

## Development

### Regenerating Code
After modifying the proto file, regenerate the code:

#### Backend
```bash
python -m grpc_tools.protoc \
    -I=proto \
    --python_out=backend \
    --grpc_python_out=backend \
    --pyi_out=backend \
    proto/golf_service.proto
```
#### Frontend
```bash
cd frontend
protoc \
    --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_out=./src/generated \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_opt=outputClientImpl=grpc-web \
    --proto_path=../proto \
    ../proto/golf_service.proto
```

### Backend Development

The backend uses Python with gRPC. Key files:
- `proto/golf_service.proto`: Service definitions
- `backend/server.py`: gRPC server implementation
- `backend/golf_service_pb2.py`: Generated Python code

### Frontend Development

The frontend uses React with gRPC-Web. Key files:
- `frontend/src/GolfService.ts`: gRPC client setup
- `frontend/src/generated/`: Generated TypeScript code
- `frontend/src/components/`: React components

## Architecture

1. **Frontend**: React application using gRPC-Web for API calls
2. **Envoy Proxy**: Translates gRPC-Web calls to gRPC
3. **Backend**: Python gRPC server handling business logic

## API Documentation

The gRPC service provides the following endpoints:

1. `RecordShot`: Record a new golf shot
2. `GetStatistics`: Retrieve shot statistics
3. `StreamRecentShots`: Stream real-time shot updates

For detailed API documentation, see the proto file