from flask import Flask, request, jsonify
from datetime import datetime, timedelta

app = Flask(__name__)

# 模拟数据库（内存字典）
user_data = {
    "test_openid_123456": {
        "userInfo": {"nickName": "测试用户"},
        "status": "reserved",
        "endTime": None
    }
}

# 模拟 login 接口，直接返回假 openid
@app.route('/login', methods=['POST'])
def login():
    # 不使用真实 code，直接返回 mock openid
    user_info = request.json.get('userInfo')
    mock_openid = "test_openid_123456"

    # 保存用户信息到内存（可选）
    user_data[mock_openid] = {
        "userInfo": user_info,
        "status": "reserved",
        "endTime": None
    }

    return jsonify({
        "openid": mock_openid,
        "msg": "测试登录成功"
    })

# 获取用户状态
@app.route('/get_user_status', methods=['GET'])
def get_user_status():
    openid = request.args.get('openid')
    if not openid or openid not in user_data:
        return jsonify({"status": "reserved", "endTime": None})

    user = user_data[openid]
    return jsonify({
        "status": user["status"],
        "endTime": user["endTime"]
    })

# 开始游戏接口，设置状态并返回结束时间
@app.route('/start_game', methods=['POST'])
def start_game():
    openid = request.json.get('openid')
    if not openid or openid not in user_data:
        return jsonify({"error": "Invalid openid"}), 400

    # 设置结束时间为当前时间后 1 分钟（可改）
    end_time = datetime.now() + timedelta(minutes=1)
    end_time_str = end_time.strftime("%Y-%m-%d %H:%M:%S")

    user_data[openid]["status"] = "playing"
    user_data[openid]["endTime"] = end_time_str

    return jsonify({
        "endTime": end_time_str
    })

# 预约接口
@app.route('/appointment', methods=['POST'])
def appointment():
    data = request.get_json()
    openid = data.get("openid")

    if openid and openid in user_data:
        user_data[openid]["status"] = "reserved"

    return jsonify({
        "code": 0,
        "msg": "预约成功",
        "receivedData": data
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
