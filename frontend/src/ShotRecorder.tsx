import React, { useState } from 'react';
import { Club, Shot, ShotResult } from './generated/golf_service';
import { golfService } from './GolfService';

export const ShotRecorder: React.FC = () => {
    const [club, setClub] = useState<Club>(Club.CLUB_UNSPECIFIED);
    const [distance, setDistance] = useState<number>(0);
    const [result, setResult] = useState<ShotResult>(ShotResult.RESULT_UNSPECIFIED);
    const [notes, setNotes] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        
        const shot: Shot = {
            club,
            distance,
            result,
            notes,
            id: '',
            timestamp: 0
        };

        try {
            const response = await golfService.RecordShot({ ...shot });
            setMessage(`Shot recorded successfully! ID: ${response.shot?.id}`);
            console.log('Shot details:', response.shot);
            // Clear form
            setClub(Club.CLUB_UNSPECIFIED);
            setDistance(0);
            setResult(ShotResult.RESULT_UNSPECIFIED);
            setNotes('');
        } catch (error) {
            setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
            console.error('Error recording shot:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Club:</label>
                    <select value={club} onChange={e => setClub(Number(e.target.value))}>
                        {Object.entries(Club)
                            .filter(([key]) => isNaN(Number(key)))
                            .map(([key, value]) => (
                                <option key={value} value={value}>
                                    {key}
                                </option>
                            ))}
                    </select>
                </div>
                <div>
                    <label>Distance (yards):</label>
                    <input
                        type="number"
                        value={distance}
                        onChange={e => setDistance(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Result:</label>
                    <select value={result} onChange={e => setResult(Number(e.target.value))}>
                        {Object.entries(ShotResult)
                            .filter(([key]) => isNaN(Number(key)))
                            .map(([key, value]) => (
                                <option key={value} value={value}>
                                    {key}
                                </option>
                            ))}
                    </select>
                </div>
                <div>
                    <label>Notes:</label>
                    <textarea
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                    />
                </div>
                <button type="submit">Record Shot</button>
            </form>
            {message && (
                <div style={{ marginTop: '1rem', color: message.includes('Error') ? 'red' : 'green' }}>
                    {message}
                </div>
            )}
        </div>
    );
};
