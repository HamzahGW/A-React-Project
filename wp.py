import os
import zipfile
import shutil
import pathlib
try:
    os.rename("./apps/landing/dist/index.html", "./apps/landing/dist/index.php")
except: 
    pass

open("./apps/landing/dist/function.php", "w")
open("./apps/landing/dist/footer.php", "w")
open("./apps/landing/dist/header.php", "w")
with open("./apps/landing/dist/style.css", "w") as file:
    file.write("""/*
Theme Name: Arch theme
Theme URI: https://tx.sa/
Author: TX
Author URI: https://tx.sa/
Description: A WordPress theme using a React frontend.
Version: 1.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Tags: react, theme
Text Domain: my-react-theme
*/
""")
    
shutil.copy("./apps/landing/screenshot.png", "./apps/landing/dist/screenshot.png")
    
def zip_folder(folder_path, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, start=folder_path)
                zipf.write(file_path, arcname)

# Define the folder to compress and the output ZIP file path
folder_to_zip = "./apps/landing/dist"
output_zip_file = "./apps/landing/arch_theme.zip"

# Create the ZIP file
zip_folder(folder_to_zip, output_zip_file)

shutil.rmtree("./apps/landing/dist")
os.mkdir("./apps/landing/dist")
shutil.copy("./apps/landing/arch_theme.zip", "./apps/landing/dist/arch_theme.zip")
os.remove("./apps/landing/arch_theme.zip")
class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


print(f"{bcolors.OKGREEN}Theme created at {pathlib.Path(__file__).parent.resolve()}/apps/landing/dist/arch_theme.zip{bcolors.ENDC}")
