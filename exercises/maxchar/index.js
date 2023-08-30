// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function charIndex(char, arr) {
  return arr.findIndex(tup => tup[0] === char)
}

function charCount(str) {
  return str.split('').reduce((arr, val) => {
    const i = charIndex(val, arr)
    if (i > -1) {
      arr[i] = [arr[i][0], arr[i][1] + 1]
    } else {
      arr.push([val, 1])
    }
    return arr
  }, [])
}

function maxChar(str) {
  return charCount(str).reduce((a, v) => {
    return a[1] > v[1] ? a : v
  }, ['', 0])[0]
}

module.exports = maxChar;
