# Task description
Develop an interactive Pathfinding Visualizer that demonstrates how A* or Dijkstra’s algorithm finds the shortest path on a grid. The application should allow users to:

- Place start and end points
- Add or remove obstacles
- Watch the algorithm explore and find the path in real time

## Resources and example:
- See how it works in web app: [A-Star search and Dijkstra Algorithms demo](https://cse442-17f.github.io/A-Star-Search-and-Dijkstras-Algorithm/)


# Technical Requirements

## Backend (C++ / Java / Python / JS / anything)
- Implement either A* or Dijkstra’s algorithm:
  - A*: Uses heuristics (e.g., Manhattan distance) to prioritize paths.
  - Dijkstra: Explores all paths with uniform cost until the shortest is found.
- Input: Grid size, start/end coordinates, obstacle positions
- Output: List of visited nodes and the final path

## Frontend (JavaScript)
- Use Canvas API or D3.js to visualize:
  - Grid cells
  - Start and end points
  - Obstacles
  - Visited nodes (e.g., in blue)
  - Final path (e.g., in green)
- Allow user interaction:
  - Click to place/remove obstacles
  - Drag start/end points
  - Button to run/reset the algorithm

## Common
- Performance: Optimize algorithm for large grids (e.g., 50x50 or 100x100)
- Interactivity: Smooth UI updates and responsive controls
- Modularity: Clean separation between backend logic and frontend rendering
- No limitations in models

# Testing Requirements
- Unit tests for:
  - Grid initialization
  - Pathfinding correctness
  - Obstacle handling
- Edge cases:
  - No path available
  - Start equals end
  - Grid boundaries

# Documentation Requirements
- README.md with:
  - Project overview
  - Setup instructions
  - How to run and test
- Inline comments explaining key logic
- Optional: Record a short demo video or GIF

# Optional Extensions
- Add diagonal movement
- Support weighted cells (e.g., terrain difficulty)
- Compare A* vs Dijkstra side-by-side
- Export path as JSON or image
-