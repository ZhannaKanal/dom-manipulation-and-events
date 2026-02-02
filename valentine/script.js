const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const container = document.querySelector(".container");
const paragraph = document.querySelector(".paragraph");

yesBtn.addEventListener("click", () => {
  paragraph.style.fontSize = "18px";
  paragraph.style.fontWeight = "300";

  paragraph.innerHTML = `
    💖 YAY!!! 💖 <br />
    Best decision ever 🥰<br />
    <img src="meme.jpg" alt="meme" class="meme" />
    <br />
    I love you ❤️
  `;

  document.querySelector(".buttons").style.display = "none";
});

noBtn.addEventListener("click", () => {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
