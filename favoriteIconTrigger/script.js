const favoriteIcon = document.querySelectorAll(".favorite-icon");

favoriteIcon.forEach(
  button => {
    button.addEventListener("click", () => {
      if (button.classList.contains("filled")) {
        button.classList.remove("filled");
        button.innerHTML = "&#9825";
      }
    })
  }
)