function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++){
    const j = word.length - 1 -i;
    if(word[i] === word[j]){
      return true
    }
    return false
  }
}

/* 
  Add your pseudocode here
  If the first letter is same as last and second letter also same to second last 
  letter until we reach the middle, return true
  Iterating from start to middle
  confirm whether eaach letter is same as letters at the end
  If all letters match return true
  else false
*/

/*
  Add written explanation of your solution here
  code iterates through the start letters and compares to the letters from the end
  If letters match it returns true
  else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
