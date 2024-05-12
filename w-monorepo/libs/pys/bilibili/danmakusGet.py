from bilibili_api import video, sync, Credential

v = video.Video(bvid='BV1LZ421n7kp')

dms = sync(v.get_danmakus(0))

for dm in dms:
    print(dm)
