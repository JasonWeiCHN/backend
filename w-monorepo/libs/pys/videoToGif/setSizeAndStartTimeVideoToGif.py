from moviepy.editor import VideoFileClip

# 帧率越高 图片越清晰 但是内存也越大 颜色也是 colors=64/256/512
def create_gif_from_video(video_path, start_time, end_time, gif_path, width=120, height=120, fps=10, colors=32):
    # 加载视频文件
    video_clip = VideoFileClip(video_path)

    # 截取指定时间段的视频片段
    gif_clip = video_clip.subclip(start_time, end_time)

    # 调整分辨率并按比例缩放以适应指定尺寸
    gif_clip = gif_clip.resize(height=height, width=width).margin(color=(0, 0, 0))  # 填充空白区域为白色

    # 将视频片段转换为GIF并保存
    gif_clip.write_gif(gif_path, fps=fps, colors=colors)

    # 释放资源
    video_clip.close()

# 示例使用
video_path = 'input_video.mp4'  # 替换为你的MP4文件路径
start_time = '00:00:1'  # 替换为开始时间 (格式为 'HH:MM:SS')
end_time = '00:00:3'    # 替换为结束时间 (格式为 'HH:MM:SS')
gif_path = 'output1.gif'  # 替换为你希望保存GIF文件的路径

create_gif_from_video(video_path, start_time, end_time, gif_path)
