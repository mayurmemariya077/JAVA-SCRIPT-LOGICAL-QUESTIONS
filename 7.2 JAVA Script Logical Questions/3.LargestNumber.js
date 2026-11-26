
// Find the largest number in an array without using Math.max() function.

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findMax([3, 9, 2, 7]));