import React, { useRef, useEffect } from 'react';

const CELL_SIZE = 25;

function Grid({ gridSize, start, setStart, end, setEnd, obstacles, setObstacles, visited, path }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    for (let r = 0; r < gridSize.rows; r++) {
      for (let c = 0; c < gridSize.cols; c++) {
        ctx.strokeStyle = '#ccc';
        ctx.strokeRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }

    // Draw visited nodes
    visited.forEach(([r, c]) => {
      ctx.fillStyle = 'lightblue';
      ctx.fillRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    // Draw path
    path.forEach(([r, c]) => {
      ctx.fillStyle = 'lightgreen';
      ctx.fillRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    // Draw obstacles
    obstacles.forEach(([r, c]) => {
      ctx.fillStyle = 'black';
      ctx.fillRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    // Draw start/end
    ctx.fillStyle = 'orange';
    ctx.fillRect(start[1] * CELL_SIZE, start[0] * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    ctx.fillStyle = 'red';
    ctx.fillRect(end[1] * CELL_SIZE, end[0] * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }, [gridSize, start, end, obstacles, visited, path]);

  // Handle click to add/remove obstacles
  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const r = Math.floor(y / CELL_SIZE);
    const c = Math.floor(x / CELL_SIZE);
    if (r === start[0] && c === start[1]) return;
    if (r === end[0] && c === end[1]) return;
    const idx = obstacles.findIndex(([or, oc]) => or === r && oc === c);
    if (idx === -1) {
      setObstacles([...obstacles, [r, c]]);
    } else {
      setObstacles(obstacles.filter((_, i) => i !== idx));
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={gridSize.cols * CELL_SIZE}
      height={gridSize.rows * CELL_SIZE}
      style={{ border: '2px solid #333', margin: '20px' }}
      onClick={handleCanvasClick}
    />
  );
}

export default Grid;
