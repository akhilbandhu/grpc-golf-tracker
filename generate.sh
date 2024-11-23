#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}Generating Protocol Buffers code...${NC}"

# Generate Python code
python -m grpc_tools.protoc \
    -I=proto \
    --python_out=backend \
    --grpc_python_out=backend \
    --pyi_out=backend \
    proto/golf_service.proto

echo -e "${GREEN}Code generation complete!${NC}"