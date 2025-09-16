import requests

url = "http://127.0.0.1:5000/solve"
payload = {
    "grid": [5, 5],
    "start": [0, 0],
    "end": [4, 4],
    "obstacles": [[2, 2], [3, 3]],
    "algorithm": "astar"
}

response = requests.post(url, json=payload)
print("Status code:", response.status_code)
try:
    print("Response JSON:", response.json())
except Exception as e:
    print("Response content:", response.text)
