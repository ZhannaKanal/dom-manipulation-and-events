const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
textInput.addEventListener("input", () => {
  charCount.textContent = `Character Count: ${textInput.value.length}/50`;
})