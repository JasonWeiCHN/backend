# server.py
from flask import Flask, request, jsonify
from datetime import datetime, timedelta
import requests
import json
import os

import time
import uuid
from Crypto.Signature import pkcs1_15
from Crypto.Hash import SHA256
from Crypto.PublicKey import RSA
import base64

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')

app = Flask(__name__)

# 你小程序的 appid 和 appsecret
APPID = 'wxb43b9c9b4e4bdedc'
APPSECRET = '904096d46da12dd4a9d398a97e8a9a7f'
MCHID = '1721560524'
# API_V3_KEY = '你的APIv3密钥'
PRIVATE_KEY_PATH = './apiclient_key.pem'  # 私钥路径
SERIAL_NO = '46BD36449B394C61AA5A65E82E5FCC0855F025BF'
NOTIFY_URL = 'https://kulele.club/api/wxpay_notify'

def load_json_file(filename):
    path = os.path.join(DATA_DIR, filename)
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def load_private_key():
    with open(PRIVATE_KEY_PATH, 'rb') as f:
        return RSA.import_key(f.read())

def generate_pay_sign(prepay_id):
    timestamp = str(int(time.time()))
    nonce_str = str(uuid.uuid4()).replace('-', '')
    package = f"prepay_id={prepay_id}"
    sign_type = "RSA"

    message = f"{APPID}\n{timestamp}\n{nonce_str}\n{package}\n"

    private_key = load_private_key()  # 你已有此函数，加载私钥
    h = SHA256.new(message.encode('utf-8'))
    signature = pkcs1_15.new(private_key).sign(h)
    pay_sign = base64.b64encode(signature).decode()

    return {
        "timeStamp": timestamp,
        "nonceStr": nonce_str,
        "package": package,
        "signType": sign_type,
        "paySign": pay_sign
    }

def generate_signature(method, url_path, body):
    timestamp = str(int(time.time()))
    nonce_str = str(uuid.uuid4()).replace('-', '')
    message = f"{method}\n{url_path}\n{timestamp}\n{nonce_str}\n{body}\n"

    key = load_private_key()
    h = SHA256.new(message.encode('utf-8'))
    signature = pkcs1_15.new(key).sign(h)
    signature_base64 = base64.b64encode(signature).decode()

    authorization = (
        f'WECHATPAY2-SHA256-RSA2048 mchid="{MCHID}",'
        f'serial_no="{SERIAL_NO}",'
        f'nonce_str="{nonce_str}",'
        f'timestamp="{timestamp}",'
        f'signature="{signature_base64}"'
    )
    return authorization

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

@app.route('/register_instructions', methods=['GET'])
def get_register_instructions():
    try:
        instructions = load_json_file('register_instructions.json')
        if isinstance(instructions, list):
            return jsonify({'instructions': instructions})
        else:
            return jsonify({'error': 'Invalid format'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500

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

    try:
        game_id = int(game_id)
    except ValueError:
        return jsonify({'error': 'Invalid id'}), 400

    games = load_json_file('games.json')
    game = next((g for g in games if g.get("id") == game_id), None)

    if not game:
        return jsonify({'error': 'Game not found'}), 404

    return jsonify({'game': game})

@app.route('/user_balance', methods=['GET'])
def get_user_balance():
    openid = request.args.get('openid')
    if not openid:
        return jsonify({'error': 'Missing openid'}), 400

    try:
        balance_data = load_json_file('user_balance.json')
        user = next((u for u in balance_data if u['openid'] == openid), None)
        if user:
            return jsonify({'balance': user['balance']})
        else:
            return jsonify({'balance': 0.00})  # 默认余额为0
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/member_articles', methods=['GET'])
def get_member_articles():
    try:
        articles = load_json_file('member_articles.json')
        return jsonify({'articles': articles})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/recharge', methods=['POST'])
def recharge():
    data = request.get_json()
    openid = data.get('openid')
    amount = data.get('amount')  # 单位：分

    if not openid or not amount:
        return jsonify({'error': 'Missing openid or amount'}), 400

    out_trade_no = uuid.uuid4().hex[:32]
    url_path = '/v3/pay/transactions/jsapi'
    url = f'https://api.mch.weixin.qq.com{url_path}'

    payload = {
        "appid": APPID,
        "mchid": MCHID,
        "description": "酷乐乐游戏馆会员充值",
        "out_trade_no": out_trade_no,
        "notify_url": NOTIFY_URL,
        "amount": {
            "total": int(amount),
            "currency": "CNY"
        },
        "payer": {
            "openid": openid
        }
    }

    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': generate_signature('POST', url_path, json.dumps(payload))
    }

    response = requests.post(url, headers=headers, json=payload)
    if response.status_code in (200, 201):
        res_json = response.json()
        prepay_id = res_json.get("prepay_id")
        if not prepay_id:
            return jsonify({'error': '缺少prepay_id', 'detail': res_json}), 500

        pay_params = generate_pay_sign(prepay_id)
        pay_params['prepay_id'] = prepay_id  # 返回给前端方便调试

        return jsonify(pay_params)
    else:
        return jsonify({'error': '支付下单失败', 'detail': response.text}), 500

@app.route('/wxpay_notify', methods=['POST'])
def wxpay_notify():
    try:
        notify_data = request.json
        print("收到微信支付回调通知：", json.dumps(notify_data, indent=2))

        # 实际应用中应解密 resource.ciphertext，获取订单信息

        # TODO: 解密并确认支付成功后更新余额
        # 这里只是演示，模拟写入 user_balance.json

        return '', 204
    except Exception as e:
        print("处理回调失败：", str(e))
        return '', 500

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5004, debug=True)
