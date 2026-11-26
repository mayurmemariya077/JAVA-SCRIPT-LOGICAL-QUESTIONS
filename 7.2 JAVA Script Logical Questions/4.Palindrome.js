
// Palindrome = check wether a string is palindrome (reads the same forwards and backwards).

const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello")); 