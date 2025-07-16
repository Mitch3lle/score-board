let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.querySelector(".home-score");
let guestScoreEl = document.querySelector(".guest-score");

// Reusable function
function updateScore(team, points) {
  if (team === "home") {
    homeScore += points;
    homeScoreEl.innerText = homeScore;
  } else if (team === "guest") {
    guestScore += points;
    guestScoreEl.innerText = guestScore;
  }
}

// Attach events dynamically
document.getElementById("home-btn1").addEventListener("click", () => updateScore("home", 1));
document.getElementById("home-btn2").addEventListener("click", () => updateScore("home", 2));
document.getElementById("home-btn3").addEventListener("click", () => updateScore("home", 3));

document.getElementById("guest-btn1").addEventListener("click", () => updateScore("guest", 1));
document.getElementById("guest-btn2").addEventListener("click", () => updateScore("guest", 2));
document.getElementById("guest-btn3").addEventListener("click", () => updateScore("guest", 3));
