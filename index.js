// Variables
var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]
var wordToGuess = document.querySelector("#word-to-guess")
var remainingGuesses = document.querySelector("#remaining-guesses")
var incorrectLetters = document.querySelector("#incorrect-letters")
var incorrectLettersArr = []
var letterGuessed = []
// targets the previous-word ID
var previousWord = document.querySelector("#previous-word")
// targets the wins ID
var winDisplay = document.querySelector("#wins")
//targets the losses ID
var lossDisplay = document.querySelector("#losses")
var wins = 0
var losses = 0 
var guessesLeft = 10
// this will be an array that will be storing the correctLetters the user is typing in
var correctLetters = []
var randomWord
var displayWord


// Onkeyup functionality
document.onkeyup = function(e) {
  // Variable that will store the key pressed by the user, also making sure it is lowercase when it is stored.
  var key = e.key.toLowerCase()
  // Create if/elseif statement where if the right letter is pressed then we will push() that letter to the letterGuessed array. Else if the wrong letter is pressed, it will be pushed to the lettersWrongArr array. You would also subtract from the guessesLeft variable
  if (randomWord.includes(key) && correctLetters.indexOf(key) === -1) { 
    letterGuessed.push(key)
  } else if (!randomWord.includes(key) && incorrectLettersArr.indexOf(key) === -1) {
    incorrectLettersArr.push(key)
    guessesLeft--
    console.log(guessesLeft)
  }
  // Run the updated guess information function
  updateGuessInfo()
  // Create if statement where if the displayed word matches the random word from the array, then you would add a win, change the previous word with the word that was just guessed, and then run the new game function to run a new game
  if (displayWord === randomWord) {
    wins++
    winDisplay.textContent = wins
    previousWord.textContent = randomWord
    //run the new game function to run a new game
    newGame()
  }
  // Create an if statement where if the user runs out of guesses, then we would add to the loss variable, add the word to the previous word section, and then run a new game using the new game function created below.
  if (guessesLeft <= 0) { //If guesses left is less than or equal to 0. Once the user hits 0 we want to make sure that the game ends
    losses++
    lossDisplay.textContent = losses
    previousWord.textContent = randomWord
    //run the new game function to run a new game
    newGame()
  }}
  
  // Function for new game
  function newGame () {
     
    // This function will contain a variable that will retrieve a random word from the words array. This is what you have on line 24.
    randomWord = words[Math.floor(Math.random()*words.length)]
    // This function will also reset the variables for correct letters, incorrect letters, and remaining guesses.
    correctLetters = randomWord.split()
    incorrectLettersArr = []
    guessesLeft = 10
    // Once a new game start (when this function runs) we will also be running the update guess information function
    updateGuessInfo()
  }

  // Function for updating the guess information
  function updateGuessInfo() {
    // This is the function that will be updating underscores on the front-end of the website
    //we want to set the display word to be equal to an empty string.
    displayWord = ''
    // A for loop will be in this function (similar to your line 47)
    for (let i = 0; i < randomWord.length; i++) {
      // In the for loop an if statement will be located where if the letter is in the word, then display that letter, else display an underscore.
      if (correctLetters.indexOf(randomWord[i]) > -1) {
        displayWord += randomWord[i]
      } else {
        //display underscore
        displayWord += '_'
        console.log(displayWord)
      }
    }    
    // This function will also add the letters that the user has missed to the bottom (similar to line 84 in your file)
    remainingGuesses.textContent = guessesLeft
    incorrectLetters.textContent = incorrectLettersArr
    wordToGuess.textContent = displayWord
  }
    
   
  // At the end of the file run the new game function.
  newGame()