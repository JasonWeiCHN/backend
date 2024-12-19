from moviepy.video.io.VideoFileClip import VideoFileClip
import os

def cut_mp4(input_file, start_time, end_time, output_file):
    """
    从 MP4 文件中剪切指定时间段并保存为新的 MP4 文件。

    参数：
        input_file (str): 输入的 MP4 文件路径。
        start_time (float): 起始时间（秒）。
        end_time (float): 结束时间（秒）。
        output_file (str): 输出的 MP4 文件路径。
    """
    if not os.path.exists(input_file):
        print(f"输入文件不存在: {input_file}")
        return

    try:
        # 加载视频文件
        with VideoFileClip(input_file) as video:
            # 检查起止时间是否有效
            if start_time < 0 or end_time > video.duration or start_time >= end_time:
                print("起始时间或结束时间无效！")
                return

            # 剪切视频
            new_video = video.subclip(start_time, end_time)

            # 写入新的视频文件
            new_video.write_videofile(output_file, codec="libx264", audio_codec="aac")

            print(f"剪切完成，已保存为: {output_file}")

    except Exception as e:
        print(f"发生错误: {e}")

if __name__ == "__main__":
    # 示例用法
    input_path = "video.mp4"
    output_path = "output.mp4"
    start = 569.0  # 起始时间（秒）
    end = 580.0    # 结束时间（秒）

    cut_mp4(input_path, start, end, output_path)
