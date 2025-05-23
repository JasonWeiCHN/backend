from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/hello')
def hello():
    return jsonify(message="Hello, World!")

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5004, debug=True)
