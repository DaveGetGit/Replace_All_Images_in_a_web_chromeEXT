# Image Changer Extension

## Description

The Image Changer extension is a fun and simple tool that changes all images on a webpage to a random image from a predefined list. It's like a surprise in every tab!

## How it works

The extension uses JavaScript to iterate over all image elements in the document. For each image, it generates a random index to select an image from the `imgNames` array. It then changes the `src` attribute of each image to a new URL that points to the selected image.

## Installation

1. Download or clone this repository.
2. Navigate to `chrome://extensions` in your Chrome browser.
3. Enable Developer mode (toggle switch in the top right).
4. Click on "Load unpacked" and select the directory of this extension.

## Usage

Just navigate to any webpage and watch as all images are replaced with a random image from the extension's list!

## Code

Here's the main JavaScript code that powers the extension:

```javascript
console.log("Image Changer extension");

let imgNames = ["1.png", "2.png", "3.png", "4.png", "5.png"];

let currentImages = document.getElementsByTagName("img");

for (let imgelt of currentImages) {
  let r = Math.floor(Math.random() * imgNames.length);

  let file = "imgresources/" + imgNames[r];
  let url = chrome.runtime.getURL(file);
  imgelt.src = url;

  console.log(imgelt.src);
}
```
