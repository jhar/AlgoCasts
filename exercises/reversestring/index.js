// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Method 1
  //return str.split('').reverse().join('')
  
  // Method 2
  let reversed = '';
  for (let ch of str) {
    reversed = ch + reversed;
  }
  return reversed;

	// Method 2.5
	// let newStr = ''
	// for (let i = str.length; i > 0; i--) {
	//		newStr = newStr.concat(str.charAt(i - 1))
	// }
	// return newStr

	// Method 3
	// return str.split('').reduce((a, v) => v.concat(a))
}

module.exports = reverse;
