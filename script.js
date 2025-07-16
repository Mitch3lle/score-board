//let homeBtn1 = document.getElementById("home-btn1");
//console.log(homeBtn1);
//let homeScore = document.getElementsByClassName("home-score");


let homeBtn1 = document.getElementById("home-btn1");
let homeScoreEl = document.querySelector(".home-score");
let homeScore = 0;


function addnum1(){
    homeScore += 1;
    homeScoreEl.innerText = homeScore;
}

homeBtn1.addEventListener("click", addnum1);
