const thumbnails = document.querySelectorAll(".thumbnails-container img");
const fullscreenOverlay = document.getElementById("fullscreenOverlay");
const fullscreenImage = document.getElementById("fullscreenImage");
const closeButton = document.getElementById("closeButton");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const fullImageSrc = thumbnail.dataset.full;
    fullscreenImage.src = fullImageSrc;
    fullscreenOverlay.classList.add("open");
  });
});

closeButton.addEventListener("click", () => {
  fullscreenOverlay.classList.remove("open");
});

fullscreenOverlay.addEventListener("click", (event) => {
  if (event.target === fullscreenOverlay) {
    fullscreenOverlay.classList.remove("open");
  }
});
