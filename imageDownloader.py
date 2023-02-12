import requests
import os


def download_images(name, folder, number):
    # Construct the API request with the search query
    url = f"https://api.pexels.com/v1/search?query={name}&per_page={number}"
    headers = {
        'Authorization': 'process.env.DOWNLOAD_IMAGE_API'}
    response = requests.get(url, headers=headers)
    data = response.json()

    # Create the folder if it does not exist
    if not os.path.exists(folder):
        os.makedirs(folder)

    # download the images and save them to the folder
    for i, photo in enumerate(data["photos"]):
        image_url = photo["src"]["large2x"] if photo["width"] <= 600 else photo["src"]["original"]
        response = requests.get(image_url)
        with open(os.path.join(folder, name+str(i)+".jpg"), "wb") as f:
            f.write(response.content)
    print(f"{number} Images with name {name} have been downloaded to {folder}!")


# Usage
download_images("python script", "~/Downloads/linux_folder", 5)
