const strikeButton = document.getElementById("kick");
const resetButton = document.getElementById("restart");
const scoreofone = document.getElementById("team1_scoreboard");
const wickets1 = document.getElementById("wickets_1stteam");
const scoreoftwo = document.getElementById("team2_scoreboard");
const wickets2 = document.getElementById("wickets_2ndteam");
const superover1 = document.getElementById("superover1");
const superover2 = document.getElementById("superover2");

var team1Score = 0;
var team1Wickets = 0;
var team2Score = 0;
var team2Wickets = 0;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
var turn = 1;

const possibleScores = [0, 1, 2, 3, 4, 6, "W"];
function gameOver() {
  if (team1Score > team2Score) alert("INDIA WON");
  if (team2Score > team1Score) alert("PAK WON");
  if (team2Score === team1Score) alert("It is a superover!!.");
}

function updateScore() {
  scoreofone.textContent = team1Score;
  wickets1.textContent = team1Wickets;
  scoreoftwo.textContent = team2Score;
  wickets2.textContent = team2Wickets;
}

resetButton.onclick = () => {
  window.location.reload();
};

strikeButton.onclick = () => {
  const randomElement =
    possibleScores[Math.floor(Math.random() * possibleScores.length)];

  if (turn === 2) {
    team2BallsFaced++;
    superover2.children[team2BallsFaced - 1].textContent = randomElement;
    if (randomElement === "W") {
      team2Wickets++;
    }
    else {
      team2Score += randomElement;
    }
    if (
      team2BallsFaced === 6 ||
      team2Wickets === 2 ||
      team2Score > team1Score
    ) {
      turn = 3;
      gameOver();
    }
  }

  if (turn === 1) {
    team1BallsFaced++;
    superover1.children[team1BallsFaced - 1].textContent = randomElement;
    if (randomElement === "W") {
      team1Wickets++;
    } else {
      team1Score += randomElement;
    }
    if (team1BallsFaced === 6 || team1Wickets === 2) turn = 2;
  }
  updateScore();
};
