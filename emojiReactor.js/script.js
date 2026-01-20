const happyBtn = document.querySelector("#happy-btn");
const count = document.querySelector(".count");

happyBtn.addEventListener("click", () => {
  const countEl = happyBtn.querySelector(".count");
  const currCount = +countEl.textContent.split("/")[0];
  console.log("Current count:", currCount);
  
});
