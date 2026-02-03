const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Amigo Tanigo",
  players: [
    {
      name: "Diego Maradona",
      position: "forward",
      isCaptain: true,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "",
      position: "defender",
      isCaptain: true,
    },
    {
      name: "",
      position: "goalkeeper",
      isCaptain: true,
    },
  ],
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const select = document.getElementById("players");

team.innerText = `${footballTeam.team}`;
year.innerText = `${footballTeam.year}`;
headCoach.innerText = `${footballTeam.headCoach}`;

const renderPlayers = (players) => {
  playerCards.innerHTML = "";
  players.forEach((i) => {
    playerCards.innerHTML += `<div class="player-card">
  <h2> ${i.isCaptain ? "(Captain)" : ""} ${i.name}</h2>
  <p>Position: ${i.position}</p>
</div>`;
  });
};

select.addEventListener("change", (e) => {
  const value = e.target.value;
  console.log(value)
  
})