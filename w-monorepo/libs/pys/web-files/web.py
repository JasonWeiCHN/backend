import http.server
import socketserver
import logging
import os

PORT = 5001  # 你希望使用的端口号

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def handle_one_request(self):
        try:
            super().handle_one_request()
        except Exception as e:
            logging.error(f"Error handling request: {e}")
            self.send_error(400, "Bad request")

    def log_message(self, format, *args):
        logging.info("%s - - [%s] %s\n" %
                     (self.client_address[0],
                      self.log_date_time_string(),
                      format % args))

# 设置日志配置
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# 获取当前工作目录
current_directory = os.getcwd()
print(f"Serving files from: {current_directory}")

with socketserver.TCPServer(("", PORT), MyRequestHandler) as httpd:
    print("正在运行服务器，端口号为:", PORT)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已停止。")
