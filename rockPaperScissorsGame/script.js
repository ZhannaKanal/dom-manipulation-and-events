// const rockBtn = document.getElementById("rock-btn")
// const paperBtn = document.getElementById("paper-btn")
// const scissorsBtn = document.getElementById("scissors-btn")

// let playerScore = 0;
// rockBtn.addEventListener("click", () => {
//   console.log(computerChoice());
//   const computerChoice = computerChoice();
//   if(computerChoice==="rock"){
//     console.log("It's a tie")
//   }else if(computerChoice==="paper"){
//     return 
//   }
// })
const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}