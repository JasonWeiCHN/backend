import asyncio
from bilibili_api import video, Credential

SESSDATA = "545f8256%2C1730506380%2C56782%2A52CjDBK5TxQ4nuEtIfjX7PlC4JTrtkAdU67cL_8bnDigxCqouOm9qNhepkmdvVJ8uVGU8SVk5jYU9vZ0FpVVVyUmZIYUQtcFpLVTRmQ1dnTGRSakVuNmVnMjhVbHVJMVNKdHVrdHZ6TmVQeTJmYW9CaE5pY0J1N2ZLLUFueUFTQlQtcWs1a09wUURnIIEC"
BILI_JCT = "6ca3d4937c7bb0458b718f59bcd098c3"
BUVID3 = ""

async def main():
    # 实例化 Credential 类
    credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT, buvid3=BUVID3)
    # 实例化 Video 类
    v = video.Video(bvid="BV1WB421r7zg", credential=credential)
    # 获取视频信息
    info = await v.get_info()
    # 打印视频信息
    print(info)
    # 给视频点赞
    await v.like(True)

if __name__ == '__main__':
    # 主入口
    asyncio.get_event_loop().run_until_complete(main())
