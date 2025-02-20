from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)

# 启用 CORS，允许所有来源的请求
CORS(app, resources={r"/*": {"origins": "*"}})

# 定义生成 JSON 文件的路径
UPLOAD_FOLDER = './json_files'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/')
def index():
    return "Flask Web Server is Running!"

# 接收前端表单提交的 POST 请求
@app.route('/submit', methods=['POST'])
def submit():
    # 获取表单数据
    data = request.json

    # 获取商品名称，作为文件名
    good_name = data.get('goodName', '').strip()

    # 生成 JSON 文件名 (确保没有非法字符)
    if good_name:
        file_name = f"{good_name}.json"
        file_path = os.path.join(UPLOAD_FOLDER, file_name)

        # 保存数据到 JSON 文件
        with open(file_path, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, ensure_ascii=False, indent=4)

        return jsonify({"message": "文件已保存", "file_name": file_name}), 200
    else:
        return jsonify({"error": "商品名称不能为空"}), 400

if __name__ == '__main__':
    # 指定 host 为 0.0.0.0，port 为 5003，允许外部访问
    app.run(host='0.0.0.0', port=5003, debug=True)
