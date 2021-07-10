// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('Hello').toUpperCase())

function reverseStringOpt2(str) {
    let revString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        revString = revString + str[i]
    }
    return revString
}

console.log(reverseStringOpt2('Dupa'))

function reverseStringOpt3(str) {
    let revString = ''
    for (let i = 0; i <= str.length - 1; i++) {
        revString = str[i] + revString
    }
    return revString
}

console.log(reverseStringOpt3('Fiutek'))

function reverseStringOpt4(str) {
    let revString = ""
    for(let char of str) {
        revString = char + revString
    } 
    return revString
}
console.log(reverseStringOpt4("Buddy"))

function reverseStringOpt5(str) {
    let revString = ""
    str.split('').forEach(char => { 
        revString = char + revString 
    })
    return revString
}
console.log(reverseStringOpt5("Whatsapp"))

function reverseStromgOpt6(str) {
    return str.split('').reduce(function(revString, char) {
        return char + revString
    }, '')
}
console.log(reverseStromgOpt6("Cono"))