import pytest
from algorithms.astar import astar_search
from algorithms.dijkstra import dijkstra_search

def test_simple_path_astar():
    grid = (5, 5)
    start = (0, 0)
    end = (4, 4)
    obstacles = set()
    visited, path = astar_search(grid, start, end, obstacles)
    assert path[0] == start
    assert path[-1] == end
    assert len(path) > 0

def test_simple_path_dijkstra():
    grid = (5, 5)
    start = (0, 0)
    end = (4, 4)
    obstacles = set()
    visited, path = dijkstra_search(grid, start, end, obstacles)
    assert path[0] == start
    assert path[-1] == end
    assert len(path) > 0

def test_obstacle_handling():
    grid = (5, 5)
    start = (0, 0)
    end = (0, 2)
    obstacles = {(0, 1)}
    visited, path = astar_search(grid, start, end, obstacles)
    assert (0, 1) not in path
    assert path[-1] == end

def test_no_path():
    grid = (3, 3)
    start = (0, 0)
    end = (2, 2)
    obstacles = {(0,1), (1,0), (1,2), (2,1)}
    visited, path = dijkstra_search(grid, start, end, obstacles)
    assert path == []

def test_start_equals_end():
    grid = (3, 3)
    start = (1, 1)
    end = (1, 1)
    obstacles = set()
    visited, path = astar_search(grid, start, end, obstacles)
    assert path == [start]

def test_grid_boundaries():
    grid = (2, 2)
    start = (0, 0)
    end = (1, 1)
    obstacles = set()
    visited, path = dijkstra_search(grid, start, end, obstacles)
    assert all(0 <= r < 2 and 0 <= c < 2 for r, c in path)
