from PIL import Image

def resize_image(input_path, output_path, max_size):
    """
    Resize the input image to fit within the specified maximum size while maintaining aspect ratio.

    Args:
        input_path (str): The path to the input image file.
        output_path (str): The path to save the resized image.
        max_size (int): The maximum size (in pixels) for both width and height.
    """
    # Open the input image
    with Image.open(input_path) as img:
        # Resize the image while maintaining aspect ratio
        img.thumbnail((max_size, max_size), Image.LANCZOS)

        # Save the resized image
        img.save(output_path)

# Example usage:
input_image_path = "cfdg_high.jpg"
output_image_path = "resized_image_600.jpg"
max_size = 600  # Maximum size for both width and height
resize_image(input_image_path, output_image_path, max_size)
