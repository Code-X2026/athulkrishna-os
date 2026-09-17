import os
from PIL import Image

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
GALLERY_DIR = os.path.join(BASE_DIR, "src", "assets", "images", "gallery")
PROJECTS_DIR = os.path.join(BASE_DIR, "src", "assets", "images", "projects")
OPTIMIZED_DIR = os.path.join(BASE_DIR, "src", "assets", "images", "optimized")

os.makedirs(OPTIMIZED_DIR, exist_ok=True)

# Key gallery images to optimize
GALLERY_IMAGES = [
    ("10 pc installed and configyred for an accounting firm.jpg", "pc_accounting_firm.webp", 1200),
    ("New rack for School IT Lab.jpg", "school_it_rack.webp", 1200),
    ("New D LINK Switch installation and configuration.jpg", "dlink_switch_setup.webp", 1200),
    ("Laptop Trouble shooting And Ram Upgration.jpg", "laptop_diagnostics.webp", 1200),
    ("Small Office Network Setup and configuration.jpg", "small_office_network.webp", 1200),
    ("i5 Pc as tally server for 6 clients.jpg", "tally_server_setup.webp", 1200),
]

PROJECT_IMAGES = [
    ("nexus_prime_cover.jpg", "nexus_prime_cover.webp", 1000),
    ("nexus_prime_logo.jpg", "nexus_prime_logo.webp", 400),
    ("nexus_prime.jpg", "nexus_prime.webp", 1000),
    ("helious_pro_cover.jpg", "helious_pro_cover.webp", 1000),
    ("helious_pro_logo.jpg", "helious_pro_logo.webp", 400),
    ("helious_pro.jpg", "helious_pro.webp", 1000),
]

def optimize_image(src_path, dest_path, max_dim=1200, quality=82):
    if not os.path.exists(src_path):
        print(f"Warning: {src_path} not found")
        return
    with Image.open(src_path) as img:
        # Convert RGB if necessary
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
        
        # Resize if larger than max_dim
        w, h = img.size
        if max(w, h) > max_dim:
            if w > h:
                new_w = max_dim
                new_h = int(h * (max_dim / w))
            else:
                new_h = max_dim
                new_w = int(w * (max_dim / h))
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            print(f"Resized {os.path.basename(src_path)}: {w}x{h} -> {new_w}x{new_h}")
        
        img.save(dest_path, "WEBP", quality=quality, method=6)
        src_size = os.path.getsize(src_path) / 1024
        dest_size = os.path.getsize(dest_path) / 1024
        savings = (1 - dest_size / src_size) * 100
        print(f"Saved {os.path.basename(dest_path)}: {src_size:.1f}KB -> {dest_size:.1f}KB ({savings:.1f}% reduction)")

print("--- Optimizing Gallery Images ---")
for src_name, dest_name, max_dim in GALLERY_IMAGES:
    src_p = os.path.join(GALLERY_DIR, src_name)
    dest_p = os.path.join(OPTIMIZED_DIR, dest_name)
    optimize_image(src_p, dest_p, max_dim=max_dim, quality=82)

print("\n--- Optimizing Project Images ---")
for src_name, dest_name, max_dim in PROJECT_IMAGES:
    src_p = os.path.join(PROJECTS_DIR, src_name)
    dest_p = os.path.join(OPTIMIZED_DIR, dest_name)
    optimize_image(src_p, dest_p, max_dim=max_dim, quality=82)

print("\nImage optimization complete.")
