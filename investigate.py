from PIL import Image, ImageChops

def investigate(path):
    img = Image.open(path)
    print("Mode:", img.mode)
    print("Size:", img.size)

    # Convert to RGB to ignore alpha for bounding box if it's on a white background
    rgb = img.convert("RGB")
    bg = Image.new("RGB", rgb.size, (255, 255, 255))
    diff = ImageChops.difference(rgb, bg)
    bbox = diff.getbbox()
    print("Bbox (ignoring white):", bbox)

    # Check bbox ignoring transparency
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        alpha = img.convert("RGBA").split()[-1]
        bbox_alpha = alpha.getbbox()
        print("Bbox (ignoring fully transparent):", bbox_alpha)

investigate("public/images/velora logo005.png")
