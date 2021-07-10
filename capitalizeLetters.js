// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized

function capitalizeLetters(str) {
    let wordArray = str.toLowerCase().split(' ')
    for (let i=0; i<wordArray.length; i++) {
        wordArray[i] = wordArray[i].substring(0,1).toUpperCase() + wordArray[i].substring(1)
    }
    return wordArray.join(' ')
}
console.log(capitalizeLetters('mama poszla na zakupy'))

///////////////////////////////////////////////////////////////////////////////////////////////////////

function capitalizeLetters2(str) {
    let wordArray = str.toLowerCase().split(' ')
    for (let i=0; i<wordArray.length; i++) {
        let word = wordArray[i].split('')
        let capitalLetter = word[0].toUpperCase()
        word.splice(0,1,capitalLetter) 
        wordArray[i] = word.join('')
    }
    return wordArray.join(' ')
}
console.log(capitalizeLetters2('jas poszedl do lasu'))

////////////////////////////////////////////////////////////////////////////////////////////////////////

function capitalizeLetters3(str) {
    return str.toLowerCase().split(' ').map(
        function(word) {
            return word[0].toUpperCase() + word.substr(1)
        }
    )
    .join(' ')
}

console.log(capitalizeLetters3("ben poszedl do sklepu"))

//////////////////////////////////////////////////////////////////////////////////////////////////////
// REGULAR EXPRESSIONS

function capitalizeLetters4(str) {
    return str.replace(/\b[a-z]/gi, function(char) {
        return char.toUpperCase()
    })
}
console.log(capitalizeLetters4('baba tanczyla na rurze'))