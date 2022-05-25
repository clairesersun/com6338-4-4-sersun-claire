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
var randomWord = words[Math.floor(Math.random()*words.length)]

var hiddenWord = randomWord.replace(/[a-z]/g, '_')

document.querySelector("#word-to-guess").innerHTML = hiddenWord

