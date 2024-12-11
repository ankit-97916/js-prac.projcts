const randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const Remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultpass");


const p = document.createElement("p");

let prevGuess = [];

let numGuess  = 1;

let playGame = true;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid Number");
    } else if(guess < 1){
        alert("please enter a  Number more than 1");
    } else if(guess > 100){
        alert("please enter   Number Less than 100");
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random Number Was ${randomNum}`)
            endGame();

        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`Your Guess is Right, CONGRATS`);
        endGame();
    } else if (guess < randomNum){
        displayMessage(`Number is TOOO low`);
    } else if(guess > randomNum){
        displayMessage(`Number is TOOO high`);
    }

}

function displayGuess(guess){
  userInput.value = "";
  guessSlot.innerText += `${guess}`
  numGuess++;
  Remaining.innerText = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){

}

function newGame(){

}