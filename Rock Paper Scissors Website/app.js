var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".scoreboard");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissor");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function characterSwitch(word) {
  if(word === "rock") {
    return "Rock";
  }else if(word === "paper") {
    return "Paper";
  }else if(word === "scissor") {
    return "Scissors";
  }
}

function userWin(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = characterSwitch(userChoice) + smallUserWord + " beats " + characterSwitch(computerChoice) + smallCompWord + "!";
  userScore++;
  userScore_span.innerHTML = userScore;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function () {document.getElementById(userChoice).classList.remove('green-glow')}, 300);

  document.getElementById(userChoice).classList.remove('choice:hover');
  setTimeout(function() {document.getElementById(userChoice).classList.add('choice:hover')}, 300);
}

function computerWin(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = characterSwitch(userChoice) + smallUserWord + " loses to " + characterSwitch(computerChoice) + smallCompWord + "!";
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function () {document.getElementById(userChoice).classList.remove('red-glow')}, 300);

  document.getElementById(userChoice).classList.remove('choice:hover');
  setTimeout(function() {document.getElementById(userChoice).classList.add('choice:hover')}, 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = characterSwitch(userChoice) + smallUserWord + " equals " + characterSwitch(computerChoice) + smallCompWord + "! Draw!";
  document.getElementById(userChoice).classList.add('yellow-glow');
  setTimeout(function () {document.getElementById(userChoice).classList.remove('yellow-glow')}, 300);

  document.getElementById(userChoice).classList.remove('choice:hover');
  setTimeout(function() {document.getElementById(userChoice).classList.add('choice:hover')}, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rock" + "scissor":
    case "paper" + "rock":
    case "scissor" + "paper":
      userWin(userChoice, computerChoice);
      break;
    case "scissor" + "rock":
    case "rock" + "paper":
    case "paper" + "scissor":
      computerWin(userChoice, computerChoice);
      break;
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissor" + "scissor":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("rock");
    })

    paper_div.addEventListener('click', function() {
      game("paper");
    })

    scissors_div.addEventListener('click', function() {
      game("scissor");
    })
}

main();
