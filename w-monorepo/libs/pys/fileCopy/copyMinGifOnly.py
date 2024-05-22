import os
import shutil

def copy_subdirs_and_files(src_dir, dst_dir, filenames):
    if not os.path.exists(dst_dir):
        os.makedirs(dst_dir)

    for root, dirs, files in os.walk(src_dir):
        # Check if the current directory is the root directory
        if root == src_dir:
            for dir_name in dirs:
                src_subdir = os.path.join(src_dir, dir_name)
                dst_subdir = os.path.join(dst_dir, dir_name)

                # Copy the subdirectory structure
                if not os.path.exists(dst_subdir):
                    os.makedirs(dst_subdir)

                # Check and copy specified files in the subdirectory
                for filename in filenames:
                    file_path = os.path.join(src_subdir, filename)
                    if os.path.exists(file_path):
                        shutil.copy(file_path, dst_subdir)
        else:
            # Since we are only copying the immediate subdirectories, we break the loop
            break

# Define source and destination directories
src_directory = 'F:/biliGet/funny'
dst_directory = 'F:/biliGet/funny-min'

# Define the filenames to copy
files_to_copy = ['min.gif', 'first_frame.png']

# Execute the copying process
copy_subdirs_and_files(src_directory, dst_directory, files_to_copy)
