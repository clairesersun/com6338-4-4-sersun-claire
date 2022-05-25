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


var randomWord = words[Math.floor(Math.random()*words.length)]

var hiddenWord = randomWord.replace(/[a-z]/g, '_')

// DOM Manipulation
document.querySelector("#word-to-guess").innerHTML = hiddenWord

document.querySelector("#remaining-guesses").innerHTML = remainingGuesses

document.querySelector("#incorrect-letters").innerHTML = incorrectLetters

window.addEventListener('keydown', function (e) {
  debugger
  console.log(e.key);
  var keystroke = e.key
  //check that it is a letter
  if (keystroke >= 'a' && keystroke <= 'z')
  //check if letter already named
    if (lettersGuessed.indexOf(keystroke) === -1) {
      lettersGuessed.push(keystroke);
      //if char is in randomWord
      if(randomWord.indexOf(keystroke) !== -1) {
        for(var i = 0; i<randomWord.length; i++) {
          if( randomWord.includes(keystroke)) {
            document.querySelector("#word-to-guess").innerHTML = hiddenWord.replace(hiddenWord[i],keystroke)}
        }
        //check if won
        if(randomWord === hiddenWord) {
          wins++;
        }
      } else {
        remainingGuesses--;
        incorrectLetters.push(keystroke);
        if(remainingGuesses === 0) {
          losses++
        }}}
}, false);
console.log(randomWord)

