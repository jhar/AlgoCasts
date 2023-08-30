// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // Method 1
  // return str.split('').reverse().join('') === str

  // Method 2 -- Not ideal, does 2x as much work as necessary
  // return str.split('').every((v, i) => str.charAt(str.length - 1 - i) === v)

  // Method 3
  const len = str.length
  return str
    .split('')
    .slice(0, len % 2 === 0 ? len / 2 : Math.floor(len / 2 - 1))
    .every((v, i) => str[len - 1 - i] === v)
}

module.exports = palindrome;
