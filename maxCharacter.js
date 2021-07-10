// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = ""

    str.split('').forEach(function(char) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    })
    
    for(let char in charMap) {
        if (charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char

        }
    }
    return maxChar;
}

console.log(maxCharacter('javascript to the eternity'))

let testObject = {}
console.log(testObject)
testObject["imie"] = "Paul"
console.log(testObject)