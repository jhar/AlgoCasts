// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//function steps(n) {
//  const empty = Array.from({ length: n }, () => ' ');
//  empty.forEach((el, i) => {
//    console.log('#'.repeat(i + 1) + empty.join('').slice(i + 1))
//  });
//}

function steps(n) {
  let i = 1;
  while (i <= n) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
    i++;
  }
}

module.exports = steps;
