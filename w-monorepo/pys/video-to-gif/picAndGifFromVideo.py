from moviepy.editor import VideoFileClip
from PIL import Image
import numpy as np

def create_gif_and_save_frame(video_path, start_time, end_time, gif_path, image_path, width=120, height=120, fps=10, colors=32):
    # 加载视频文件
    video_clip = VideoFileClip(video_path)

    # 截取指定时间段的视频片段
    gif_clip = video_clip.subclip(start_time, end_time)

    # 获取指定时间点的帧并保存为图片，并调整大小保持等比例
    first_frame = gif_clip.get_frame(0)
    first_frame_resized = resize_frame(first_frame, width, height)
    first_frame_img = Image.fromarray(first_frame_resized)

    # 保存第一帧图片
    first_frame_img.save(image_path)

    # 获取视频片段的宽高比
    aspect_ratio = gif_clip.size[0] / gif_clip.size[1]

    # 根据宽高比调整 GIF 的大小并保持等比例缩放
    if width / height > aspect_ratio:
        new_width = int(height * aspect_ratio)
        gif_clip_resized = gif_clip.resize((new_width, height)).margin(color=(0, 0, 0))  # 填充空白区域为黑色
    else:
        new_height = int(width / aspect_ratio)
        gif_clip_resized = gif_clip.resize((width, new_height)).margin(color=(0, 0, 0))  # 填充空白区域为黑色

    # 将视频片段转换为GIF并保存
    gif_clip_resized.write_gif(gif_path, fps=fps, colors=colors)

    # 释放资源
    video_clip.close()

def resize_frame(frame, width, height):
    # 将帧调整为指定大小并保持等比例缩放
    aspect_ratio = frame.shape[1] / frame.shape[0]
    if width / height > aspect_ratio:
        new_width = int(height * aspect_ratio)
        return np.array(Image.fromarray(frame).resize((new_width, height)))
    else:
        new_height = int(width / aspect_ratio)
        return np.array(Image.fromarray(frame).resize((width, new_height)))

# 示例使用
video_path = 'F:/biliGet/beauty/BV1N541127gi/video.mp4'  # 替换为你的MP4文件路径
start_time = '00:00:1'  # 替换为开始时间 (格式为 'HH:MM:SS')
end_time = '00:00:3'    # 替换为结束时间 (格式为 'HH:MM:SS')
gif_path = 'F:/biliGet/beauty/BV1N541127gi/min.gif'  # 替换为你希望保存GIF文件的路径
image_path = 'F:/biliGet/beauty/BV1N541127gi/first_frame.png'  # 替换为你希望保存第一帧图片的路径

create_gif_and_save_frame(video_path, start_time, end_time, gif_path, image_path)
