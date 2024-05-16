import json
from bilibili_api import Credential, user, sync

SESSDATA = "9233597d%2C1731161674%2Cf9afd%2A52CjATkcu61Z1D4ojfK_DOWCgaztC32oJdQYZjcjmZxjRggIrd6P_kSvH_fEPCKY_ZuW4SVnFrd0U3M2VaZkFNaVo2eFljM3BuWjZid3VBNU4tMXNqdFpHWlMzSko3RXZ1VVZBM2VWeVZ3LTRvUjBXMGY4YXJsald2RS1oc0prQ0lEbU5KRm1PQkNBIIEC"
BILI_JCT = "a0bcde097d2b3dc90a0f93c0e6da99df"
BUVID3 = ""

async def main():
    # 实例化 Credential 类
    credential = Credential(sessdata=SESSDATA, bili_jct=BILI_JCT, buvid3=BUVID3)

    # 实例化
    u = user.User(101575318, credential=credential)
    videos = await u.get_videos(pn=3, ps=50)

    # 存储视频的 bvid
    bvid_list = []

    # 提取每个视频的 bvid
    for video in videos['list']['vlist']:
        bvid_list.append(video['bvid'])

    # 将 bvid_list 转换为 JSON 格式并打印输出
    print(json.dumps(bvid_list))

    # 将 bvid_list 保存为 JSON 文件
    with open('bvid_list.json', 'w') as json_file:
      json.dump(bvid_list, json_file)

# 入口
sync(main())


