import json
import urllib.request
import time

DETAIL_URL = "http://store.steampowered.com/api/appdetails/?appids={0}&cc=us&l=en"

lastTime = time.time()
waitTime = 5*60.0/195

def send_req(url):
    global lastTime
    global waitTime
    retryTimes = 1
    response = None
    result = None

    while retryTimes > 0:
        try:
            response = urllib.request.urlopen(url)
            if response:
                result = response.read()
        except Exception as e:
            print(e)
            print(time.strftime('%Y-%m-%d %H:%M:%S'))

        sleepTime = lastTime + waitTime - time.time()
        if(sleepTime > 0):
            print(time.strftime('%Y-%m-%d %H:%M:%S sleep for' + str(sleepTime)))
            time.sleep(sleepTime)
        lastTime = time.time()
        retryTimes -= 1

    return result

def getDetail(appid):
    """获取某一steam游戏简介
    name:"PLAYERUNKNOWN'S BATTLEGROUNDS"
    steam_appid:578080
    """
    response = send_req(DETAIL_URL.format(appid))
    if not response:
        return
    content = json.loads(response.decode("utf8"))
    appid = int([k for k in content.keys()][0])
    result = [v for v in content.values()][0]
    result["appid"] = appid
    if result['success']:
        return result['data']
    else:
        return None

def main():
    detail = getDetail(1868140)
    print(detail)

if __name__ == '__main__':
    main()
