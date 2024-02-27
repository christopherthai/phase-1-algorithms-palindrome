function isPalindrome(word) {
  // Write your algorithm here
  let status
  let splitString = word.split("")
  let reverseString = splitString.reverse()

  let joinRevereString = reverseString.join("")

  if (word === joinRevereString) {
    status = true
  } else {
    status = false
  }
  return status
}

/* 
  Add your pseudocode here
  
  The input will be a string
  Create a variable to return true or false
  Split the string into an array of letters and save into a variable
  Create a new variable that will have the reverse order of the string

  Compare the order string to reverse string
  If order string match reverse string, return true
  If they don't match, return false
*/

/*
  Add written explanation of your solution here
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // I expect calling isPalindrome will return true if string is a palindrome
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  // I expect calling isPalindrome will return false if string is not a palindrome
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
