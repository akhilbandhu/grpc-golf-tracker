import React from 'react';
import { ShotRecorder } from './ShotRecorder';
import { RecentShots } from './RecentShots';

function App() {
  return (
    <div className="App">
      <h1>Golf Shot Tracker</h1>
      <ShotRecorder />
      <RecentShots />
    </div>
  );
}

export default App;
