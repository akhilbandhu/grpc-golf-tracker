import { GrpcWebImpl, ShotTrackerServiceClientImpl } from './generated/golf_service';
import { BrowserHeaders } from 'browser-headers';

const rpc = new GrpcWebImpl('http://localhost:8080', {
    debug: true,
    metadata: new BrowserHeaders({}),
});

export const golfService = new ShotTrackerServiceClientImpl(rpc);