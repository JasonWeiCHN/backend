# server.py
from flask import Flask, request, jsonify
from datetime import datetime, timedelta
import requests

app = Flask(__name__)

# 你小程序的 appid 和 appsecret
APPID = 'wxb43b9c9b4e4bdedc'
APPSECRET = '904096d46da12dd4a9d398a97e8a9a7f'

@app.route('/login', methods=['POST'])
def login():
    code = request.json.get('code')
    user_info = request.json.get('userInfo')  # 前端传来的 userInfo

    if not code:
        return jsonify({'error': 'Missing code'}), 400

    # 请求微信服务器，换openid
    url = f'https://api.weixin.qq.com/sns/jscode2session?appid={APPID}&secret={APPSECRET}&js_code={code}&grant_type=authorization_code'
    resp = requests.get(url)
    session_info = resp.json()

    openid = session_info.get('openid')
    if not openid:
        return jsonify({'error': 'Failed to get openid'}), 400

    # 保存用户数据，例如保存到数据库
    # 假设你已经保存了 user_info 和 openid

    # 这里不再返回 userInfo，只返回 openid
    return jsonify({
        'openid': openid,
        'msg': 'User data received successfully'  # 可选的返回信息
    })

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
