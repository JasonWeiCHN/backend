import asyncio
from bilibili_api import video, Credential

SESSDATA = "4a49923b%2C1731131473%2Cf5c69%2A52CjADXyyf4Hu9hvT8MDSvnHlJ4RkwM9LVQ99vub4YbwZvUBJVhUR_9ohHGmi3YAc2zIwSVk1hMzV1MlViM01HdFprRkdHdUo4MHhSVkE2dk5YMmpkMFZ0ZmJwdzROSzI4QUROcWN1T0M3UUJCUnhLcVpLM1NkSUxHa24yRjkxamE1LTZWLW5DSFlnIIEC"
BILI_JCT = "6f56a32a33e673dea6e0cbff8b390352"
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
