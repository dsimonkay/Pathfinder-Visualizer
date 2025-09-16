from flask import Flask, request, jsonify
from flask_cors import CORS
from algorithms.astar import astar_search
from algorithms.dijkstra import dijkstra_search

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/solve', methods=['POST'])
def solve():
    data = request.get_json()
    grid = data['grid']
    start = tuple(data['start'])
    end = tuple(data['end'])
    obstacles = set(tuple(ob) for ob in data['obstacles'])
    algorithm = data.get('algorithm', 'astar')

    if algorithm == 'astar':
        visited, path = astar_search(grid, start, end, obstacles)
    else:
        visited, path = dijkstra_search(grid, start, end, obstacles)

    return jsonify({'visited': visited, 'path': path})

if __name__ == '__main__':
    app.run(debug=True)
