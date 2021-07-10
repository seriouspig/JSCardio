// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and flase if not

function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('').toLowerCase()
    return (str.toLowerCase() === reverseStr)
}

console.log(isPalindrome('Racecar'))
console.log(isPalindrome('car'))