const galleryItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");

galleryItem.forEach((item) => {
  item.addEventListener("click", () => (lightbox.style.display = "flex"));
});
