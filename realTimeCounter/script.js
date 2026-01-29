const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
textInput.addEventListener("input", () => {
  charCount.textContent = `Character Count: ${textInput.value.length}/50`;
  if (textInput.value.length === 50) {
    charCount.style.color = "red";
  }
  if (textInput.value.length > 50) {
    textInput.value = textInput.value.slice(0, 50);
  }
});
