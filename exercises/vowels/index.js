// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function isVowel(c) {
  switch (c) {
    case 'A':
    case 'a':
    case 'E':
    case 'e':
    case 'I':
    case 'i':
    case 'O':
    case 'o':
    case 'U':
    case 'u': return true
    default: return false
  }
}

function vowels(str) {
  return str.split('').reduce((a, v) => {
    return isVowel(v) ? ++a : a
  }, 0)
}

module.exports = vowels;
