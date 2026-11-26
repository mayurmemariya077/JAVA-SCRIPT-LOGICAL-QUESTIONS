
// Factorial is the product of all positive integers up to a given number. For example,
//  the factorial of 5 (denoted as 5!) is 5 * 4 * 3 * 2 * 1 = 120.

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(10));