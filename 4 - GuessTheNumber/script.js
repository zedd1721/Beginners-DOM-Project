let random = parseInt((Math.random()*100)+1); // to generate random number

const guessValues = document.querySelector('#guessField'); //to take the input from the user.
const submit = document.querySelector('#subt');
const prevGuess = document.querySelector('.guesses'); // to display the guessArray
const remaining = document.querySelector('.lastResult');// to display the guess remaining.
const loworhi = document.querySelector('.lowOrHi');// to display  whether the guessed number is high or low
const startOver = document.querySelector('.resultParas'); //to reset the games


const p = document.createElement('p');

let guessArr = []; // to store the guessed number 
let guessCount = 1; //to count the guesses [1-10]

let playGame = true;




if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(guessValues.value);
        console.log(random);
        validateGuess(guess);
    });
}


function validateGuess(guess){ 
/*
  to validate the guessed number{
    if the user inputs the character or inputs the negative value
    if the user inputs the value more then 500.
  }
*/
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }else if(guess < 1){
    alert('Please enter a number greater than 1');
  } else if(guess > 100){
    alert('Please enter a number less than 100');
  } else{
    guessArr.push(guess);
    if(guessCount === 10){
        displayGuess(guess);
        displayMsg(`GameOver!! Random no. was ${random}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
    
  }
}

function checkGuess(guess){   
    //it will check whether the number is equal or
    //hi or low and will print the msg
    if(guess === random){
        displayMsg(`You're right, random no was ${random}`);
        endGame();
    }else if(guess > random){
        displayMsg(`Random no is smaller then the ${guess}`);
    }else if(guess < random){
        displayMsg(`Random is greater then the ${guess}`);
    }

}

function displayGuess(guess){
    //ALL DOM MANIPULATION WILL BE HANDLED IN THIS FUNCTION.
    //it will clear the text input
    //it will add the number in prevGuess
    //it will decreament number in guessremaining.
    guessValues.value = '';
    prevGuess.innerHTML = prevGuess.innerHTML + `${guess} `;
    guessCount++;
    
    
    remaining.innerHTML = `${11-guessCount}`;

}

function displayMsg(message){
    //it will pass the msg to checkguess func
    //all the printing function will be done in this func.
    loworhi.innerHTML = `<h2>${message}</h2>`;

}

function newGame(){
    //to start the new game
    const startnew = document.querySelector('#newGame');
    startnew.addEventListener('click', function(e){
        random = parseInt((Math.random()*100)+1);
        guessValues.removeAttribute('disabled');
        guessArr = [];
        prevGuess.innerHTML = '';
        startOver.removeAttribute(p);
        guessCount = 1;
        remaining.innerHTML = `${11-guessCount}`;

        playGame=true;
    });

}

function endGame(){
    //to end the game
    guessValues.value ='';
    guessValues.setAttribute('disabled' , '');
    
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    
    startOver.appendChild(p);
    playGame = false;

    newGame();
}