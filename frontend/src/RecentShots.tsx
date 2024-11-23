import React, { useEffect, useState } from 'react';
import { golfService } from './GolfService';
import { Club, Shot, StreamRequest } from './generated/golf_service';

export const RecentShots: React.FC = () => {
    const [shots, setShots] = useState<Shot[]>([]);

    useEffect(() => {
        const request: StreamRequest = { limit: 10 };
        const subscription = golfService.StreamRecentShots(request)
            .subscribe({
                next: (shot) => {
                    setShots(prev => [...prev, shot]);
                },
                error: (error) => {
                    console.error('Error streaming shots:', error);
                }
            });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            <h2>Recent Shots</h2>
            <ul>
                {shots.map((shot) => (
                    <li key={shot.id}>
                        {`${Club[shot.club]} - ${shot.distance} yards - ${shot.notes}`}
                    </li>
                ))}
            </ul>
        </div>
    );
};