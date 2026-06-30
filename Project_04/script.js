let random = parseInt(Math.random() * 100 + 1 )

const Submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let PlayGame = true


    Submit.addEventListener('click',function(e){
        e.preventDefault()

        if(!PlayGame) return;

        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if( guess < 1){
        alert('Please enter a number more than 1')
    }
    else if( guess > 100){
        alert('Please enter a number under 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game over,Random number was ${random}`)
            EndGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === random){
        displayMsg(`You guessed it right!`)
        EndGame()
    } else if (guess < random){
        displayMsg(`Number is TOO low `)
    }
    else if (guess > random){
        displayMsg(`Number is TOO High `)
    }
}

function displayGuess(guess){
    userInput.value = ``
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMsg(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function EndGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    StartOver.appendChild(p)
    PlayGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector(`#newGame`)
    newGameButton.addEventListener('click',function(e){
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p);
        PlayGame = true;
    })
}