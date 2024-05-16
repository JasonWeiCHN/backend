import cv2
import random
from PIL import Image

def extract_random_frames(video_path, output_folder, num_frames, frame_duration):
    # Open the video file
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    # Select a random starting frame
    start_frame = random.randint(0, total_frames - num_frames - 1)
    cap.set(cv2.CAP_PROP_POS_FRAMES, start_frame)

    # Loop through the frames and extract images
    frames = []
    for _ in range(num_frames):
        ret, frame = cap.read()
        if ret:
            # Convert BGR to RGB
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            # Append the frame
            frames.append(Image.fromarray(rgb_frame))

    # Save frames as GIF
    frames[0].save(output_folder + '/output_continuous.gif',
                   save_all=True, append_images=frames[1:], loop=0, duration=frame_duration)

    # Release video capture object
    cap.release()

# Example usage
video_path = 'input_video.mp4'
output_folder = 'output_frames'
num_frames = 50  # Number of frames to extract
frame_duration = 50  # Duration between frames in milliseconds

extract_random_frames(video_path, output_folder, num_frames, frame_duration)
