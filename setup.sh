#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}Setting up Golf Shot Tracker...${NC}"

# Check dependencies
if ! command -v protoc &> /dev/null; then
    echo -e "${RED}Protocol Buffers compiler not found. Please install protoc first.${NC}"
    exit 1
fi

if ! command -v python3 &> /dev/null; then
    echo -e "${RED}Python 3 not found. Please install Python 3 first.${NC}"
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js not found. Please install Node.js first.${NC}"
    exit 1
fi

# Install Python dependencies first (needed for code generation)
echo -e "${GREEN}Setting up Python backend...${NC}"
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..

# Install frontend dependencies (needed for ts-proto generation)
echo -e "${GREEN}Setting up Frontend...${NC}"
cd frontend
npm install
cd ..

# Generate code FIRST
echo -e "${GREEN}Generating code from Protocol Buffers...${NC}"
chmod +x generate.sh
./generate.sh

if [ $? -ne 0 ]; then
    echo -e "${RED}Code generation failed! Please check the errors above.${NC}"
    exit 1
fi

# Build and start services
echo -e "${GREEN}Starting services...${NC}"
docker-compose up -d  # Start Envoy

# Start backend
cd backend
source venv/bin/activate
python server.py &
BACKEND_PID=$!

# Start frontend
cd ../frontend
npm start &
FRONTEND_PID=$!

# Trap Ctrl+C
trap 'kill $BACKEND_PID $FRONTEND_PID; docker-compose down; exit' INT

echo -e "${BLUE}All services are running!${NC}"
echo "Frontend: http://localhost:3000"
echo "Backend: localhost:50051"
echo "Envoy Proxy: localhost:8080"
echo -e "${BLUE}Press Ctrl+C to stop all services${NC}"

wait