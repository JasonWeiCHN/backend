import http.server
import socketserver
import logging
import os
import shutil

PORT = 5001  # The port number you wish to use

class MyRequestHandler(http.server.SimpleHTTPRequestHandler):
    def handle_one_request(self):
        try:
            # Attempt to handle the request normally
            super().handle_one_request()
        except ConnectionResetError as e:
            logging.error(f"Connection reset by peer: {e}")
            # Don't try to send a response if the connection was reset
            return
        except BrokenPipeError as e:
            logging.error(f"Broken pipe error: {e}")
            # Handle the broken pipe error gracefully by ignoring
            return
        except Exception as e:
            logging.error(f"Error handling request: {e}")
            # Ensure that the error response is only sent if requestline exists
            if hasattr(self, 'requestline'):
                # Sending a bad request response
                self.send_error(400, "Bad request")
            else:
                # If the requestline is not available, it might be a malformed request
                logging.warning(f"Malformed request from {self.client_address[0]}")

    def log_message(self, format, *args):
        # Enhanced logging to capture better details of client requests
        logging.info("%s - - [%s] %s\n" %
                     (self.client_address[0],
                      self.log_date_time_string(),
                      format % args))

    def copyfile(self, source, outputfile):
        """
        Override the copyfile method to handle broken pipe exceptions.
        """
        try:
            shutil.copyfileobj(source, outputfile)
        except BrokenPipeError as e:
            logging.error(f"Broken pipe error while copying file: {e}")
            # We can safely ignore this, since it means the client disconnected early
            return

    def parse_request(self):
        """
        Override parse_request to handle malformed requests gracefully.
        """
        try:
            return super().parse_request()
        except Exception as e:
            logging.error(f"Error parsing request: {e}")
            return False

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
