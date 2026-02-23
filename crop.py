from PIL import Image, ImageChops, ImageDraw

def trim_and_circle(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # Trim white/near-white background
    bg = Image.new("RGBA", img.size, (255, 255, 255, 255))
    diff = ImageChops.difference(img, bg)
    bbox = diff.getbbox()
    
    if bbox:
        img = img.crop(bbox)
        
    width, height = img.size
    size = min(width, height)
    
    left = (width - size)/2
    top = (height - size)/2
    right = (width + size)/2
    bottom = (height + size)/2
    img = img.crop((int(left), int(top), int(right), int(bottom)))
    
    mask = Image.new('L', (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)
    
    output = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    output.paste(img, (0, 0), mask)
    
    output.save(output_path, "PNG")

trim_and_circle("public/images/velora logo005.png", "public/images/velora-logo-cropped.png")
