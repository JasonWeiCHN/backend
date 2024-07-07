from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['JSON_AS_ASCII'] = False
client = MongoClient('mongodb://localhost:27017/')


def get_db():
    project_name = request.headers.get('X-Project-Name', 'default')
    return client['voting_system_' + project_name]


@app.route('/subjects', methods=['POST'])
def create_subject():
    db = get_db()
    subjects = db['subjects']

    data = request.get_json(force=True)
    if not data or 'name' not in data or 'id' not in data:
        return jsonify({"error": "Invalid input"}), 400

    subject = {
        "id": data['id'],
        "name": data['name']
    }
    subject_id = subjects.insert_one(subject).inserted_id
    return jsonify({"_id": str(subject_id), "id": data['id']}), 201


@app.route('/mechanisms', methods=['POST'])
def create_mechanism():
    db = get_db()
    mechanisms = db['mechanisms']

    data = request.get_json(force=True)
    if not data or 'name' not in data or 'id' not in data:
        return jsonify({"error": "Invalid input"}), 400

    mechanism = {
        "id": data['id'],
        "name": data['name']
    }
    mechanism_id = mechanisms.insert_one(mechanism).inserted_id
    return jsonify({"_id": str(mechanism_id), "id": data['id']}), 201


@app.route('/vote', methods=['POST'])
def vote():
    db = get_db()
    results = db['results']
    voter_ips = db['voter_ips']

    data = request.get_json(force=True)
    if not data or 'subject_id' not in data or 'mechanism_id' not in data:
        return jsonify({"error": "Invalid input"}), 400

    subject_id = data['subject_id']
    mechanism_id = data['mechanism_id']
    voter_ip = request.remote_addr

    # 检查IP地址是否已经投票过
    existing_vote = voter_ips.find_one({
        "subject_id": subject_id,
        "mechanism_id": mechanism_id,
        "voter_ip": voter_ip
    })
    if existing_vote:
        return jsonify({"error": "You have already voted"}), 200

    # 记录投票
    result = results.find_one_and_update(
        {"subject_id": subject_id, "mechanism_id": mechanism_id},
        {"$inc": {"count": 1}},
        return_document=True
    )

    if result is None:
        result = {
            "subject_id": subject_id,
            "mechanism_id": mechanism_id,
            "count": 1
        }
        results.insert_one(result)

    # 保存投票者的IP地址
    voter_ips.insert_one({
        "subject_id": subject_id,
        "mechanism_id": mechanism_id,
        "voter_ip": voter_ip
    })

    return jsonify({"msg": "Vote recorded"}), 200


@app.route('/vote-count', methods=['GET'])
def get_vote_count():
    db = get_db()
    results = db['results']

    subject_id = request.args.get('subject_id')
    mechanism_id = request.args.get('mechanism_id')

    result = results.find_one({"subject_id": subject_id, "mechanism_id": mechanism_id})
    if result:
        return jsonify({"count": result.get("count", 0)})
    else:
        return jsonify({"count": 0})


@app.route('/subject-votes', methods=['GET'])
def get_subject_votes():
    db = get_db()
    results = db['results']

    subject_id = request.args.get('subject_id')

    # 查询特定 subject_id 下的所有投票结果
    cursor = results.find({"subject_id": subject_id})

    # 使用字典来存储每个 mechanism_id 对应的投票数量
    vote_counts = {}
    for result in cursor:
        mechanism_id = result.get("mechanism_id")
        count = result.get("count", 0)
        vote_counts[mechanism_id] = count

    return jsonify(vote_counts)


@app.route('/hello', methods=['GET'])
def hello():
    return "Hello, World!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
