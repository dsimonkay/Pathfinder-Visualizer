def astar_search(grid, start, end, obstacles):
    """
    A* pathfinding algorithm for a grid.
    grid: (rows, cols)
    start, end: (row, col)
    obstacles: set of (row, col)
    Returns: (visited_nodes, final_path)
    """
    import heapq
    rows, cols = grid
    def heuristic(a, b):
        # Manhattan distance
        return abs(a[0] - b[0]) + abs(a[1] - b[1])

    open_set = []
    heapq.heappush(open_set, (0, start))
    came_from = {}
    g_score = {start: 0}
    visited = []

    while open_set:
        _, current = heapq.heappop(open_set)
        visited.append(current)
        if current == end:
            # reconstruct path
            path = []
            while current in came_from:
                path.append(current)
                current = came_from[current]
            path.append(start)
            path.reverse()
            return visited, path

        for d in [(-1,0),(1,0),(0,-1),(0,1)]:
            neighbor = (current[0]+d[0], current[1]+d[1])
            if (0 <= neighbor[0] < rows and 0 <= neighbor[1] < cols and neighbor not in obstacles):
                tentative_g = g_score[current] + 1
                if tentative_g < g_score.get(neighbor, float('inf')):
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score = tentative_g + heuristic(neighbor, end)
                    heapq.heappush(open_set, (f_score, neighbor))
    # No path found
    return visited, []
