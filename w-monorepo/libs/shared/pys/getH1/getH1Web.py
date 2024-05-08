from flask import Flask, render_template, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        url = request.form['url']
        h1_texts = get_h1_text(url)
        if h1_texts:
            return render_template('index.html', h1_texts=h1_texts)
        else:
            return "获取 h1 标签文本失败。"
    return render_template('index.html', h1_texts=None)

def get_h1_text(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.9999.999 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Referer": "https://www.google.com/",
        "Upgrade-Insecure-Requests": "1",
        "Cache-Control": "max-age=0"
    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        h1_tags = soup.find_all('h1')
        h1_texts = [tag.get_text() for tag in h1_tags]
        return h1_texts
    else:
        return None

if __name__ == '__main__':
    app.run(debug=True)
