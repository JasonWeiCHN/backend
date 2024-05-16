from moviepy.editor import VideoFileClip

def create_gif_from_video(video_path, start_time, end_time, gif_path):
    # 加载视频文件
    video_clip = VideoFileClip(video_path)

    # 截取指定时间段的视频片段
    gif_clip = video_clip.subclip(start_time, end_time)

    # 将视频片段转换为GIF并保存
    gif_clip.write_gif(gif_path, fps=15)  # 可以调整fps参数来控制GIF的帧率

    # 释放资源
    video_clip.close()

# 示例使用
video_path = 'F:/biliGet/beauty/BV1Wp4y1u7br/video.mp4'  # 替换为你的MP4文件路径
start_time = '00:00:10'  # 替换为开始时间 (格式为 'HH:MM:SS')
end_time = '00:00:20'    # 替换为结束时间 (格式为 'HH:MM:SS')
gif_path = 'F:/biliGet/beauty/BV1Wp4y1u7br/output.gif'  # 替换为你希望保存GIF文件的路径

create_gif_from_video(video_path, start_time, end_time, gif_path)
