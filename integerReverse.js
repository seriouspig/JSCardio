// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse

function reverseInt(int) {
    
    return parseInt(int.toString().split('').reverse().join('')) * Math.sign(int)
}

console.log(reverseInt(123))