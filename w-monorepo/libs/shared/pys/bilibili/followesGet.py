from bilibili_api import user, sync

u = user.User(431259608)

print(sync(u.get_relation_info())["follower"])
