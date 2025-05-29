# server.py
from flask import Flask, request, jsonify
from datetime import datetime, timedelta
import requests
import json
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')

app = Flask(__name__)

# 你小程序的 appid 和 appsecret
APPID = 'wxb43b9c9b4e4bdedc'
APPSECRET = '904096d46da12dd4a9d398a97e8a9a7f'

def load_json_file(filename):
    path = os.path.join(DATA_DIR, filename)
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/login', methods=['POST'])
def login():
    code = request.json.get('code')

    if not code:
        return jsonify({'error': 'Missing code'}), 400

    # 请求微信服务器，换openid
    url = f'https://api.weixin.qq.com/sns/jscode2session?appid={APPID}&secret={APPSECRET}&js_code={code}&grant_type=authorization_code'
    resp = requests.get(url)
    session_info = resp.json()

    openid = session_info.get('openid')
    if not openid:
        return jsonify({'error': 'Failed to get openid'}), 400

    # 当前时间
    timestamp = datetime.now().isoformat()

    # 保存用户数据到本地 JSON 文件（user_data.json）
    user_data = {
        'openid': openid,
        'timestamp': timestamp
    }
    file_path = 'user_data.json'
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            try:
                existing_data = json.load(f)
            except json.JSONDecodeError:
                existing_data = []
    else:
        existing_data = []

    existing_data.append(user_data)
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(existing_data, f, ensure_ascii=False, indent=2)

    # ✅ 读取 user_register.json 判断是否已注册
    register_file = 'user_register.json'
    is_registered = False
    nickname = None

    if os.path.exists(register_file):
        with open(register_file, 'r', encoding='utf-8') as f:
            try:
                register_data = json.load(f)
            except json.JSONDecodeError:
                register_data = []
        for user in register_data:
            if user.get('openid') == openid:
                is_registered = True
                nickname = user.get('nickname')
                break

    return jsonify({
        'openid': openid,
        'isRegistered': is_registered,
        'nickname': nickname
    })

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    openid = data.get('openid')
    register_type = data.get('registerType')
    account = data.get('account')
    nickname = data.get('nickname')

    if not openid or not register_type or not account or not nickname:
        return jsonify({'error': 'missing_fields', 'msg': 'Missing required fields'}), 400

    file_path = 'user_register.json'
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            try:
                existing_data = json.load(f)
            except json.JSONDecodeError:
                existing_data = []
    else:
        existing_data = []

    if any(user.get('openid') == openid for user in existing_data):
        return jsonify({'error': 'already_registered', 'msg': 'User already registered'}), 400

    # 校验
    if register_type == 'phone':
        import re
        if not re.match(r'^1[3-9]\d{9}$', account):
            return jsonify({'error': 'invalid_phone_format', 'msg': 'Invalid phone number format'}), 400
    elif register_type == 'wechat':
        if not (4 <= len(account) <= 20):
            return jsonify({'error': 'invalid_wechat_format', 'msg': 'WeChat ID must be 4-20 characters'}), 400

    if len(nickname) > 8:
        return jsonify({'error': 'nickname_too_long', 'msg': 'Nickname too long'}), 400

    # 添加注册记录
    existing_data.append({
        'openid': openid,
        'register_type': register_type,
        'account': account,
        'nickname': nickname,
        'timestamp': datetime.now().isoformat()
    })

    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(existing_data, f, ensure_ascii=False, indent=2)

    return jsonify({'msg': 'Registration successful'})

@app.route('/appointment', methods=['POST'])
def appointment():
    data = request.get_json()
    print("收到小程序提交的数据：", data)

    # 这里可以做校验、保存数据库等操作
    response = {
        "code": 0,
        "msg": "预约成功",
        "receivedData": data
    }
    return jsonify(response)

@app.route('/get_user_status', methods=['GET'])
def get_user_status():
    openid = request.args.get('openid')
    if not openid:
        return jsonify({'error': 'Missing openid'}), 400

    user = user_data.get(openid, {})
    status = user.get('status', 'idle')
    end_time = user.get('end_time')

    # 判断是否超时
    if status == 'playing' and end_time:
        now = datetime.now()
        end_dt = datetime.strptime(end_time, "%Y-%m-%d %H:%M:%S")
        if now >= end_dt:
            # 超时了，清空
            user_data[openid] = {'status': 'idle'}
            return jsonify({'status': 'idle'})

    return jsonify({
        'status': status,
        'endTime': end_time
    })

@app.route('/start_game', methods=['POST'])
def start_game():
    data = request.get_json()
    openid = data.get('openid')

    if not openid:
        return jsonify({'error': 'Missing openid'}), 400

    # 模拟预约时记录了预约时长，这里我们默认 2 小时
    duration_hours = 2
    start_time = datetime.now()
    end_time = start_time + timedelta(hours=duration_hours)

    user_data[openid] = {
        'status': 'playing',
        'start_time': start_time.strftime("%Y-%m-%d %H:%M:%S"),
        'end_time': end_time.strftime("%Y-%m-%d %H:%M:%S")
    }

    return jsonify({
        'msg': '游戏开始记录成功',
        'endTime': end_time.strftime("%Y-%m-%d %H:%M:%S")
    })

@app.route('/get_swiper_images', methods=['GET'])
def get_swiper_images():
    images = load_json_file('swiper_images.json')
    return jsonify({'images': images})

@app.route('/games_and_categories', methods=['GET'])
def get_games_and_categories():
    categories = load_json_file('categories.json')
    games = load_json_file('games.json')
    return jsonify({
        "categories": categories,
        "games": games
    })

@app.route('/game_detail', methods=['GET'])
def get_game_detail():
    game_id = request.args.get('id')
    if not game_id:
        return jsonify({'error': 'Missing id'}), 400

    games = load_json_file('games_map.json')
    game = games.get(game_id)

    if not game:
        return jsonify({'error': 'Game not found'}), 404

    return jsonify({'game': game})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5004, debug=True)
