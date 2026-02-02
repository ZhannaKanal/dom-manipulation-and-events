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

team.innerText = `${footballTeam.team}`;
year.innerText = `${footballTeam.year}`;
headCoach.innerText = `${footballTeam.headCoach}`;
