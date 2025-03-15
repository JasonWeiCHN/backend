import subprocess
import os

def start_game():
    # 目标游戏目录路径
    game_directory = r"D:\SANGUO\SANGUO-ORIGINS"  # 修改为游戏目录的路径
    exe_path = "DWORIGINS.exe"  # 修改为游戏的可执行文件名

    # 检查游戏目录是否存在
    if not os.path.exists(game_directory):
        print(f"Error: {game_directory} does not exist.")
        return

    # 切换到目标目录
    os.chdir(game_directory)

    # 检查 exe 文件是否存在
    if not os.path.exists(exe_path):
        print(f"Error: {exe_path} does not exist in the directory.")
        return

    try:
        # 启动 .exe 文件
        process = subprocess.Popen(exe_path, shell=True)
        process.communicate()  # 等待程序执行完毕
        print(f"Game started: {exe_path}")
    except Exception as e:
        print(f"Error occurred while starting the game: {str(e)}")

if __name__ == "__main__":
    start_game()
