// CHALLENGE 1: LONGEST WORLD
// Return the longest word of a string
// If more than one longest word, put into an array

function longestWord(sen) {
    let senArray = sen.split(' ')
    let wordMap = {}
    let largestWord = 0
    let wordToReturn = "Nic"
    let wordArray = []
    for (let word of senArray) {
        wordMap[word] = word.length
    }
    for (let word in wordMap) {
        if (wordMap[word] > largestWord) {
            largestWord = wordMap[word]
            wordToReturn = word
        }          
    }
    wordArray.push(wordToReturn)

    for (let word in wordMap) {
        if (wordMap[word] === wordToReturn.length && word !== wordToReturn) {
            wordArray.push(word)
        }
    }
    if (wordArray.length > 1) {
        return wordArray
    } else return wordArray[0]

}
console.log(longestWord("Jas poszedl do kina szybko"))

//////////////////////////////////////////////////////////////////////////////////////////////////////

function longestWord2(sen) {
    // create filtered array - remove comas and punctuation
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
    // sort by length
    const sorted = wordArr.sort((a,b) => b.length - a.length)
    // if multiple words, put into array
    const longestWordArr = sorted.filter((word) => word.length === sorted[0].length)
    // check if more than one array val
    if (longestWordArr.length === 1) {
        return longestWordArr[0]
    } else {
        return longestWordArr
    }
}

console.log(longestWord2("Hello, my name is: Jan"))