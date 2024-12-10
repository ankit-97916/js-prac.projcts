let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
  // rock , paper, scissor
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game DRAW";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = ` You win The ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "darkgreen";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You Lose ${computerChoice} beats the ${userChoice}`;
    msg.style.backgroundColor = "darkred";
  }
};
const playGame = (userChoice) => {
  console.log("userChoice =", userChoice);
  const computerChoice = genCompChoice();
  console.log("computer choice =", computerChoice);

  if (userChoice === computerChoice) {
    // draw game.
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      (userWin === computerChoice) === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
