import requests
import os
import time

# Liste des régions et leurs URLs Wikimedia directes
regions = {
    "bafing": "https://upload.wikimedia.org/wikipedia/commons/6/69/Location_Map_of_Bafing_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "folon": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Location_Map_of_Folon_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "kabadougou": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Location_Map_of_Kabadougou_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "worodougou": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Location_Map_of_Worodougou_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "bounkani": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Location_Map_of_Bounkani_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "gontougo": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Location_Map_of_Gontougo_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "loh-djiboua": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Location_Map_of_L%C3%B4h-Djiboua_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "gbokle": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Location_Map_of_Gb%C3%B4kle_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "san-pedro": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Location_Map_of_San-P%C3%A9dro_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "nawa": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Location_Map_of_Nawa_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "goh": "https://upload.wikimedia.org/wikipedia/commons/9/90/Location_Map_of_G%C3%B4h_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "haut-sassandra": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Location_Map_of_Haut-Sassandra_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "bere": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Location_Map_of_B%C3%A9r%C3%A9_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "poro": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Location_Map_of_Poro_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "hambol": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Location_Map_of_Hambol_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "tchologo": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Location_Map_of_Tchologo_Region_in_C%C3%B4te_d%27Ivoire.svg",
    "la-me": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Location_Map_of_La_M%C3%A9_Region_in_C%C3%B4te_d%27Ivoire.svg"
}

output_dir = "public/images/regions"
os.makedirs(output_dir, exist_ok=True)

def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        return True
    return False

# Pour chaque région
for region_id, image_url in regions.items():
    print(f"Téléchargement de l'image pour {region_id}...")
    
    try:
        output_file = os.path.join(output_dir, f"{region_id}.svg")
        
        if download_image(image_url, output_file):
            print(f"✓ Image téléchargée pour {region_id}")
        else:
            print(f"✗ Échec du téléchargement pour {region_id}")
            
        # Attendre un peu entre chaque requête
        time.sleep(0.5)
        
    except Exception as e:
        print(f"✗ Erreur pour {region_id}: {str(e)}")

print("\nTerminé!")
