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
var remainingGuesses = 10
var incorrectLetters = []
var lettersGuessed = []
var losses
var wins
//Random word from array is chosen
var randomWord = words[Math.floor(Math.random()*words.length)]
// Letters are replaced with underscores
var hiddenWord = randomWord.replace(/[a-z]/g, '_')

// Initial DOM Manipulation

// Word chosen is placed in #word-to-guess element
document.querySelector("#word-to-guess").innerHTML = hiddenWord

// Game displays 10 remaining guesses in #remaining-guesses element
document.querySelector("#remaining-guesses").innerHTML = remainingGuesses

document.querySelector("#incorrect-letters").innerHTML = incorrectLetters





// User presses key
// Check if letter is included in the random word
// If included, replace all iterations of the underscore in with the letter in the #word-to-guess element
// If letter not included #word-to-guess element remains unchanged and incorrect letter is added to the #incorrect-letters element and the #remaining-guesses element shows one fewer ransoming guesses
// If the user repeats the letter, no changes to the game state
// When no underscores remain in the #word-to-guess element (or they run out of guesses in which case they add to the lose number vs the win [make part of this a function, the one that both do, and insert it]), win displays an added number to the score, new random word chosen with underscores, incorrect letters is blank, remaining guesses show 10, #previous-word reads the previous word




// TRY AGAIN TOMORROW
// window.addEventListener('keydown', function (e) {
//   debugger
//   console.log(e.key);
//   var keystroke = e.key
//   //check that it is a letter
//   if (keystroke >= 'a' && keystroke <= 'z')
//   //check if letter already named
//     if (lettersGuessed.indexOf(keystroke) === -1) {
//       lettersGuessed.push(keystroke);
//       //if char is in randomWord
//       if(randomWord.indexOf(keystroke) !== -1) {
//         for(var i = 0; i<randomWord.length; i++) {
//           if( randomWord.includes(keystroke)) {
//             //THIS IS ONLY REPLACING THE FIRST LETTER!
//             document.querySelector("#word-to-guess").innerHTML = hiddenWord.replace(hiddenWord[i],keystroke)}
//         }
//         //check if won
//         if(randomWord === hiddenWord) {
//           wins++;
//         }
//       } else {
//         remainingGuesses--;
//         document.querySelector("#remaining-guesses").innerHTML = remainingGuesses;
//         incorrectLetters.push(keystroke);
//         document.querySelector("#incorrect-letters").innerHTML = incorrectLetters;
//         if(remainingGuesses === 0) {
//           losses++
//         }}}
// }, false);
console.log(randomWord)

