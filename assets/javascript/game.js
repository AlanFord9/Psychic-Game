    // Declaring variables and arrays
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var maxGuesses = 9;
    var guesses = maxGuesses;
    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var remainingGuessesText = document.getElementById("remaining-guesses-text");
    var previousGuessesText = document.getElementById("previous-guesses-text");
    var userGuesses = []
    // Event for each key press
    document.onkeyup = function(event) {
      var userGuess = event.key;
    //   Computer chooses a letter
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //   If else statement for a guess, win, and loss
      if (userGuess === computerGuess) {
        wins++;
        reset();
      } else {
        if (guesses === 0) {
         losses++;
         reset();
        } else {
          guesses--;
          userGuesses.push(userGuess);
        }
      }
    //   Declare the function to reset guesses
      function reset(){
        userGuesses = [];
        guesses = maxGuesses;
      }
        // Display the wins, losses, guesses left and guesses so far.
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        remainingGuessesText.textContent = "Guesses Left: " + guesses;
        previousGuessesText.textContent = "Your Guesses so far: " + userGuesses;
      };