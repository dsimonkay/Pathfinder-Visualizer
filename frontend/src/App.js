
import React, { useState } from 'react';
import Grid from './Grid';
import Controls from './Controls';

function App() {
  const [gridSize, setGridSize] = useState({ rows: 20, cols: 20 });
  const [start, setStart] = useState([0, 0]);
  const [end, setEnd] = useState([19, 19]);
  const [obstacles, setObstacles] = useState([]);
  const [visited, setVisited] = useState([]);
  const [path, setPath] = useState([]);
  const [algorithm, setAlgorithm] = useState('astar');

  const handleSolve = async () => {
    const response = await fetch('http://127.0.0.1:5000/solve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        grid: [gridSize.rows, gridSize.cols],
        start,
        end,
        obstacles,
        algorithm,
      }),
    });
    const data = await response.json();
    setVisited(data.visited);
    setPath(data.path);
  };

  const handleReset = () => {
    setVisited([]);
    setPath([]);
    setObstacles([]);
    setStart([0, 0]);
    setEnd([gridSize.rows - 1, gridSize.cols - 1]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Pathfinder Visualizer</h1>
      <Controls
        gridSize={gridSize}
        setGridSize={setGridSize}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        onSolve={handleSolve}
        onReset={handleReset}
      />
      <Grid
        gridSize={gridSize}
        start={start}
        setStart={setStart}
        end={end}
        setEnd={setEnd}
        obstacles={obstacles}
        setObstacles={setObstacles}
        visited={visited}
        path={path}
      />
    </div>
  );
}

export default App;
