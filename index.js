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
var remainingGuesses = document.querySelector("#remaining-guesses")
var guessesLeft = 10
var incorrectLetters = document.querySelector("#incorrect-letters")
var lettersWrongArr = []
var lettersGuessed = []
var losses
var wins
var wordToGuess = document.querySelector("#word-to-guess")
//Random word from array is chosen
var randomWord = words[Math.floor(Math.random()*words.length)]
var randomArr = new Array (randomWord.split(''))

// Letters are replaced with underscores
var hiddenWord = randomWord.replace(/[a-z]/g, '_')
var hiddenArr = new Array (hiddenWord.split(''))
      console.log(hiddenArr)


// Initial DOM Manipulation
// Word chosen is placed in #word-to-guess element
wordToGuess.textContent = hiddenWord
// Game displays 10 remaining guesses in #remaining-guesses element
remainingGuesses.textContent = guessesLeft
incorrectLetters.textContent = lettersWrongArr

// User presses key
document.onkeyup = function(e) {
  console.log(e)
  var key = e.key
  // Check if letter is included in the random word
  if (randomWord.indexOf(key) !== -1) {
    // If included, replace all iterations of the underscore in with the letter in the #word-to-guess element
    for (let i = 0; i < hiddenWord.length; i++) {
//find index of char in randomWord
var indexKeyInWord = randomWord.indexOf(key)
console.log(indexKeyInWord)
//replace same index with the key in hiddenWord
wordToGuess = hiddenWord.replace(indexKeyInWord[i], key)
//find a child within the text node
// debugger
// function replaceAt(hiddenWord, indexKeyInWord, key) {
//   return (
//     hiddenWord.substr(0, indexKeyInWord) + key + hiddenWord.substr(indexKeyInWord + key.length)
//   );
// }
// function checkLetter() {
//   let matchedLetters = randomWord.match(key);
//   return replaceAt(hiddenWord, matchedLetters.indexKeyInWord, key);
// }
// console.log (checkLetter)
// wordToGuess.childNodes = hiddenWord.replace(hiddenWord, indexKeyInWord, key)
// hiddenWord.forEach(indexKeyInWord, key) {
//   // var a = hiddenArr.split("");
//   hiddenWord[indexKeyInWord] = key;
//   // return hiddenWord.join("");}
// } 
// console.log(hiddenArr)

// //return hidenArr.join('')
// wordToGuess.textContent = hiddenWord
    
      // hiddenWord.replace(hiddenWord.charAt(i), key) 
      // wordToGuess.textContent =      
    
    }
    // If letter not included #word-to-guess element remains unchanged and incorrect letter is added to the #incorrect-letters element and the #remaining-guesses element shows one fewer ransoming guesses
  } else {
    lettersWrongArr.push(key)
    incorrectLetters.textContent = lettersWrongArr
    guessesLeft--
    remainingGuesses.textContent = guessesLeft

  }
}
// If the user repeats the letter, no changes to the game state
// When no underscores remain in the #word-to-guess element (or they run out of guesses in which case they add to the lose number vs the win [make part of this a function, the one that both do, and insert it]), win displays an added number to the score, new random word chosen with underscores, incorrect letters is blank, remaining guesses show 10, #previous-word reads the previous word


//one idea is to make the random word an array. see if letter pressed is in the array and then replace the location in the hiddenWord array that is merged to look like a single word with the given letter
// __.textContent = ___
///___.addEventListener()
//document.onkeyup = function(e) {
//   console.log(e.key)
// h2.textContent = e.key
// }


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

