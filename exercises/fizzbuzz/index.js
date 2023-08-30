// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  Array
    .from({ length: n }, (_, i) => {
      const n = i + 1
      const three = n % 3 === 0
      const five = n % 5 === 0
      if (three && five) console.log('fizzbuzz')
      if (three && !five) console.log('fizz')
      if (five && !three) console.log('buzz')
      if (!three && !five) console.log(n)
      return n
    })
}

module.exports = fizzBuzz;
