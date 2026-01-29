const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
textInput.addEventListener("input", () => {
  if (textInput.value.length < 50) {
    charCount.textContent = `Character Count: ${textInput.value.length}/50`;
  }
});
