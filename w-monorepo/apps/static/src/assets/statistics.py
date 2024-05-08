# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

def write_to_file(ip_address, data):
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open('page_visits.txt', 'a', encoding='utf-8') as file:
        file.write('Time: {} - IP Address: {} - Data: {}\n'.format(current_time, ip_address, data))

@app.route('/track-page-visit', methods=['POST'])
def track_page_visit():
    ip_address = request.remote_addr

    write_to_file(ip_address, '新的访客')

    return 'Page visit tracked successfully!'

@app.route('/submit-string', methods=['POST'])
def submit_string():
    request_data = request.json

    user_string = request_data.get('user_string', '')

    ip_address = request.remote_addr

    # 将用户提交的字符串写入到文件，并带上时间和 IP 地址
    write_to_file(ip_address, user_string)

    # 返回 JSON 响应
    return jsonify({'message': 'String submitted successfully!'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
