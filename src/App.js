import React from 'react';
import ScoreBoard from './component/ScoreBoard'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="heading">
      <h1>Scoreboard</h1>
      </div>
      <main className="Scoreboard">
      <ScoreBoard />
      </main>
      </div>
  
  
  );
}

export default App;