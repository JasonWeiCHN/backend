import cv2
from PIL import Image

def extract_frames(video_path, output_folder, num_frames):
    # Open the video file
    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    # Calculate the frame indices to extract
    step = total_frames // (num_frames + 1)
    frame_indices = [step * i for i in range(1, num_frames + 1)]

    # Loop through the frames and extract images
    frames = []
    for idx in frame_indices:
        # Set the frame position
        cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
        ret, frame = cap.read()
        if ret:
            # Convert BGR to RGB
            rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            # Append the frame
            frames.append(Image.fromarray(rgb_frame))

    # Save frames as GIF
    frames[0].save(output_folder + '/output.gif',
                   save_all=True, append_images=frames[1:], loop=0, duration=1000)

    # Release video capture object
    cap.release()

# Example usage
video_path = 'input_video.mp4'
output_folder = 'output_frames'
num_frames = 5

extract_frames(video_path, output_folder, num_frames)
