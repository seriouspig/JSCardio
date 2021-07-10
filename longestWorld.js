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