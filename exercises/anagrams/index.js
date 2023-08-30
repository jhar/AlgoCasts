// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};


function charCount(str) {
  return str.split('').reduce((obj, val) => {
    const key = val.toLowerCase()
    if (!isAlphaNumeric(key)) return obj
    if (obj.hasOwnProperty(key)) {
      obj[key]++
    } else {
      obj[key] = 1
    }
    return obj
  }, {})
}

function anagrams(str1, str2) {
  const a = charCount(str1)
  const b = charCount(str2)
  if (Object.keys(a).length !== Object.keys(b).length) return false
  let anagram = true
  Object.keys(a).forEach(key => {
    if (a[key] === b[key]) return
    anagram = false
  })
  return anagram
}

module.exports = anagrams;
