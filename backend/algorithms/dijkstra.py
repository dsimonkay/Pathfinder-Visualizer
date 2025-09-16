def dijkstra_search(grid, start, end, obstacles):
    """
    Dijkstra's algorithm for a grid.
    grid: (rows, cols)
    start, end: (row, col)
    obstacles: set of (row, col)
    Returns: (visited_nodes, final_path)
    """
    import heapq
    rows, cols = grid
    open_set = []
    heapq.heappush(open_set, (0, start))
    came_from = {}
    cost_so_far = {start: 0}
    visited = []

    while open_set:
        cost, current = heapq.heappop(open_set)
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
                new_cost = cost_so_far[current] + 1
                if new_cost < cost_so_far.get(neighbor, float('inf')):
                    cost_so_far[neighbor] = new_cost
                    came_from[neighbor] = current
                    heapq.heappush(open_set, (new_cost, neighbor))
    # No path found
    return visited, []
