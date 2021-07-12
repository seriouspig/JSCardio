// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. "Dormitory" === 'dirty room##'

function isAnagram(str1, str2) {
    let result = true
    let strArr1 = str1.toLowerCase().split('')
    let strArr2 = str2.toLowerCase().split('')
    console.log(strArr1)
    console.log(strArr2)
    for (let i=0; i <= strArr1.length - 1; i++) {
        if (!strArr2.includes(strArr1[i])) {
            result = false
            console.log(result)
            break 
        } else if (strArr2.includes(strArr1[i]))
            {
                let j = strArr2.indexOf(strArr1[i])
                console.log(j)
                strArr1.splice(i, 1) 
                strArr2.splice(j, 1) 
                console.log(strArr1)
                console.log(strArr2)          
            } 
        }
    if (strArr2.length === 0) {
        result = true
    } else result = false
    console.log(strArr1)
    console.log(strArr2)
    console.log(result)
}


isAnagram("Dupa", "Padu")