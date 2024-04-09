let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth")
let warningMessageElement = document.getElementById("warningMessage");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let originalImageWidth = 200;
let maxWidthWarning = "Too big. Decrease the size of the Image.";
let minWidthWarning = "Can't Visible. Increase the size of the Image.";

imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";

function onIncrementButton() {
    if (originalImageWidth >= imageMaxWidth) {
        warningMessageElement.textContent = maxWidthWarning;
    } else {
        originalImageWidth = originalImageWidth + 5;
        let updateImageWidth = originalImageWidth + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = updateImageWidth;
        imageWidthElement.textContent = updateImageWidth;
    }
}

function onDecrementButton() {
    if (originalImageWidth <= imageMinWidth) {
        warningMessageElement.textContent = minWidthWarning;
    } else {
        originalImageWidth = originalImageWidth - 5;
        let updateImageWidth = originalImageWidth + "px";
        warningMessageElement.textContent = "";
        imageElement.style.width = updateImageWidth;
        imageWidthElement.textContent = updateImageWidth;
    }
}