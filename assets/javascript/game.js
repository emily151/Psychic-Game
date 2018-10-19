//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
let compGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log(computerChoices[17]);



//Game
function keyPress(event) {
    //let compGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    var playerGuess = event.key;
    console.log(playerGuess);
    console.log(compGuess);
    if ((playerGuess === compGuess) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        compGuess.length = 0;
        console.log("you win!");
    }
    else if ((playerGuess != compGuess) && (guessesLeft > 0)) {
        guessesLeft--;
    }

    else {
        losses++;
        guessesLeft = 9;
        lettersGuessed.length = 0;
        // compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("you lost!");
    }

    let guessesSoFarArray = document.getElementById("guess-so-far");
    guessesSoFarArray.innerHTML = "Hello";
}


	// lettersGuessed.push(playerGuess);
	// console.log(computerGuess[0]);


      

    //     var html = "<p>Guess what letter I'm thinking of</p>" +
    //             "<p>Wins: " + wins + "</p>" +
    //             "<p>Losses: " + losses + "</p>" +
    //             "<p>Guesses left: " + guessesLeft + "</p>" +
    //             "<p>Your guesses so far: " + lettersGuessed + "</p>";
        
    //     document.querySelector("#game").innerHTML = html;
