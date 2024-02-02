let imageNames = ["1.png", "2.png", "3.png", "4.png", "5.png"];

let imagesOnPage = document.getElementsByTagName("img");

for (let imageElement of imagesOnPage) {
  let randomIndex = Math.floor(Math.random() * imageNames.length);

  let filePath = "imgresources/" + imageNames[randomIndex];

  let fileURL = chrome.runtime.getURL(filePath);

  imageElement.src = fileURL;

  console.log(imageElement.src);
}
