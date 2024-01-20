console.log("Image Changer extension");

let imgNames = ["1.png", "2.png", "3.png", "4.png", "5.png"];

let currentImages = document.getElementsByTagName("img");

for (imgelt of currentImages) {
  let r = Math.floor(Math.random() * imgNames.length);

  let file = "imgresources/" + imgNames[r];
  let url = chrome.runtime.getURL(file);
  imgelt.src = url;

  console.log(imgelt.src);
}
