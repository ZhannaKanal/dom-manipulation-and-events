const happyBtn = document.querySelector("#happy-btn");

happyBtn.addEventListener("click", () => {
  const countEl = happyBtn.querySelector(".count");
  let currCount = +countEl.textContent.split("/")[0];
  if (currCount === 10) {
    return;
  } else {
    currCount += 1;
    countEl.textContent = currCount + "/10";
  }
});
