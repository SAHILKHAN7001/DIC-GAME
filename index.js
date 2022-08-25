// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetBtn() {
    rollBtn.style.display="none";
    resetBtn.style.display="block";
}

rollBtn.addEventListener("click",function() {
    const random = Math.floor(Math.random()*6)+1;

    if(player1Turn) {
    player1Score += random;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = random;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player2 Turn"
    }
    else {
        player2Score +=random
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = random
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent ="Player1 Turn"
    }

    if(player1Score >=20) {
        message.textContent="Player1 WON ";
        showResetBtn()
    } else if(player2Score >=20){
        message.textContent="Player2 WON ";
        showResetBtn()
    }
    else {
        player1Turn = !player1Turn
    }
}) 

resetBtn.addEventListener("click",function() {
    resetAll()
})

function resetAll() {
    message.textContent ="Player1 Turn"
    player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
         player1Score = 0
         player2Score = 0
        player1Turn = true
        player1Dice.textContent = "-"
        player2Dice.textContent = "-"
        player1Scoreboard.textContent=0
        player2Scoreboard.textContent=0
        rollBtn.style.display="block";
        resetBtn.style.display="none";
}