# -*- coding: utf-8 -*-
from flask import Flask, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/track-page-visit', methods=['POST'])
def track_page_visit():
    # 获取访问页面的 IP 地址
    ip_address = request.remote_addr

    # 获取当前时间
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # 记录页面访问的 IP 地址和时间到本地文件
    with open('page_visits.txt', 'a') as file:
        file.write('IP Address: {} - Time: {}\n'.format(ip_address, current_time))

    return 'Page visit tracked successfully!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
