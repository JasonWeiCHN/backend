import http.server
import socketserver
import logging
import os

PORT = 5001  # 设置你想监听的端口
BLOCKED_IPS = {
#     "45.135.193.101", 封禁IP
}

MAX_CONTENT_LENGTH = 10 * 1024 * 1024  # 最大允许请求体为10MB

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def handle_one_request(self):
        client_ip = self.client_address[0]

        # 拦截黑名单 IP
        if client_ip in BLOCKED_IPS:
            logging.warning(f"Blocked IP tried to connect: {client_ip}")
            return

        # 拦截非 HTTP 请求（如 TLS、二进制协议）
        try:
            peeked = self.rfile.peek(1)[:1]
            if peeked and peeked[0] < 32:
                raise ValueError(f"Invalid request start byte: {peeked[0]}")
        except Exception as e:
            logging.warning(f"Rejected non-HTTP request from {client_ip}: {e}")
            return

        try:
            super().handle_one_request()
        except Exception as e:
            logging.error(f"Error handling request from {client_ip}: {e}")
            try:
                self.send_error(400, "Bad request")
            except:
                pass

    def do_GET(self):
        # 屏蔽特定 User-Agent 或路径特征
        user_agent = self.headers.get('User-Agent', '').lower()
        if "python-requests" in user_agent or "curl" in user_agent:
            logging.warning(f"Blocked suspicious User-Agent from {self.client_address[0]}: {user_agent}")
            self.send_error(403, "Forbidden")
            return

        if "mstshash=Administr" in self.path:
            logging.warning(f"Blocked suspicious path from {self.client_address[0]}: {self.path}")
            self.send_error(403, "Forbidden pattern detected")
            return

        super().do_GET()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        if content_length > MAX_CONTENT_LENGTH:
            self.send_error(413, "Payload Too Large")
            return

        super().do_POST()

    def log_message(self, format, *args):
        logging.info("%s - - [%s] %s" %
                     (self.client_address[0],
                      self.log_date_time_string(),
                      format % args))

# 设置日志输出格式
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# 输出当前服务目录
current_directory = os.getcwd()
print(f"Serving files from: {current_directory}")

# 启动服务器
with socketserver.TCPServer(("", PORT), MyRequestHandler) as httpd:
    print(f"服务器已启动，监听端口 {PORT}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n服务器已手动停止。")
