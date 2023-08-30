// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => null));

  let count = 1;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let top = 0;
  let direction = 'right';
  let offset = 0;

  while (count <= (n * n)) {
    if (direction === 'right') {
      matrix[top][left + offset] = count;
      offset++;

      if (left + offset > right) {
        offset = 0;
        direction = 'down';
        top++;
      }
    } else if (direction === 'down') {
      matrix[top + offset][right] = count;
      offset++;

      if (top + offset > bottom) {
        offset = 0;
        direction = 'left';
        right--;
      }
    } else if (direction === 'left') {
      matrix[bottom][right - offset] = count;
      offset++;

      if (right - offset < left) {
        offset = 0;
        direction = 'up';
        bottom--;
      }
    } else if (direction === 'up') {
      matrix[bottom - offset][left] = count;
      offset++;

      if (bottom - offset < top) {
        offset = 0;
        direction = 'right';
        left++;
      }
    }

    count++;
  }

  return matrix;
}

module.exports = matrix;
