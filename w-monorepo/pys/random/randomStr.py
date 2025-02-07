import random
import string

def generate_random_string(length):
    # 定义字符集，包含字母和数字
    characters = string.ascii_letters + string.digits
    # 随机选择字符生成指定长度的字符串
    random_string = ''.join(random.choice(characters) for _ in range(length))
    return random_string

# 示例：生成长度为10的随机字符串
length = 6
random_str = generate_random_string(length)
print(f"{random_str}")
