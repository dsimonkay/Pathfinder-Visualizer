import React from 'react';

function Controls({ gridSize, setGridSize, algorithm, setAlgorithm, onSolve, onReset }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Rows:
        <input
          type="number"
          value={gridSize.rows}
          min={5}
          max={100}
          onChange={e => setGridSize({ ...gridSize, rows: Number(e.target.value) })}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        Cols:
        <input
          type="number"
          value={gridSize.cols}
          min={5}
          max={100}
          onChange={e => setGridSize({ ...gridSize, cols: Number(e.target.value) })}
        />
      </label>
      <label style={{ marginLeft: '10px' }}>
        Algorithm:
        <select value={algorithm} onChange={e => setAlgorithm(e.target.value)}>
          <option value="astar">A*</option>
          <option value="dijkstra">Dijkstra</option>
        </select>
      </label>
      <button style={{ marginLeft: '10px' }} onClick={onSolve}>Run</button>
      <button style={{ marginLeft: '10px' }} onClick={onReset}>Reset</button>
    </div>
  );
}

export default Controls;
