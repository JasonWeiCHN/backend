import http.server
import socketserver
import logging
import os

PORT = 5001  # The port number you wish to use

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def handle_one_request(self):
        try:
            super().handle_one_request()
        except ConnectionResetError as e:
            logging.error(f"Connection reset by peer: {e}")
            # Don't try to send a response if the connection was reset
            return
        except Exception as e:
            logging.error(f"Error handling request: {e}")
            # Ensure that the error response is only sent if requestline exists
            if hasattr(self, 'requestline'):
                self.send_error(400, "Bad request")

    def log_message(self, format, *args):
        logging.info("%s - - [%s] %s\n" %
                     (self.client_address[0],
                      self.log_date_time_string(),
                      format % args))

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Get the current working directory
current_directory = os.getcwd()
print(f"Serving files from: {current_directory}")

with socketserver.TCPServer(("", PORT), MyRequestHandler) as httpd:
    print("Server running on port:", PORT)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
