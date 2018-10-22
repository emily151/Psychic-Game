//Array of possible computer choices
var computerChoices = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
  //Variables for tracking players wins, losses, & guesses left
  var wins = 0;
  var losses = 0;
  var guessesLeft = 9;
  var lettersGuessed = [];
  let compGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  var total=0;
  //Game
  
  printOnScreen();
  
  function keyPress(event) {
    var playerGuess = event.key;
    compGuess =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
    lettersGuessed.push(playerGuess);
  
    if (playerGuess == compGuess && guessesLeft > 0) {
      wins++;
      total++;
      resetRound();
      alert("You win!");
    } else if (playerGuess != compGuess && guessesLeft > 0) {
      guessesLeft--;
    } else {
      alert("You lost!");
      losses++;
      total++;
      resetRound();
    }
    printOnScreen();
  
    if (total === 2){
        var userPlayAgain = confirm("Game Over! Do you want to play Again?");
        if (userPlayAgain === true){
              resetGame();
              printOnScreen();
        }
        else {
            document.getElementById("game-over").style.display='block';
            document.getElementById("startAgain").style.display='block';
            //printOnScreen();
        }
    }
  
  }
  
  function resetGame(){
      resetRound();
      wins = 0;
      losses = 0;
      total = 0;
      printOnScreen();
  }
  
  function resetRound() {
    lettersGuessed = [];
    guessesLeft = 8;
  }
  
  
  function printOnScreen(gameOver) {
    document.getElementById("startAgain").style.display='none';
    document.getElementById("game-over").style.display='none';
    document.getElementById("guess-so-far").innerHTML = lettersGuessed;
    document.getElementById("wins-so-far").innerHTML = wins;
    document.getElementById("losses-so-far").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft+1;
  }