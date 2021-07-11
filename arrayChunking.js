// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length 
function chunkArray(arr, len) {
    let chunkedArray = []
    while (arr.length > 0) {
        let chunk = arr.splice(0,len)
        chunkedArray.push(chunk)
    }
    return chunkedArray
}

console.log(chunkArray([0,1,2,3,4,5,6], 2))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chunkArray2(arr, len) {
    // Init chunked arr
    const chunkedArr = []
    // Set index
    let i = 0
    // Loop while index is less than the array length
    while (i < arr.length) {
        // Slice out from the index to the index + chunk length 
        // push on to the chunked array
        chunkedArr.push(arr.slice(i, i + len))
        // increment by chunk lenght
        i += len
    }
    return chunkedArr;
}

console.log(chunkArray2([0,1,2,3,4,5,6], 2))

////////////////////////////////////////////////////////////////////////////////////////////////////////

function chunkArray3(arr, len) {
    // init chunked arr
    const chunkedArr = []
    // loop through arr
    arr.forEach(function(val) {
        // Get last element
        const last = chunkedArr[chunkedArr.length - 1]
        // check if there is a last and if last length is equal to the chunk length
        if (!last || last.length === len) {
            chunkedArr.push([val])
        } else {
            last.push(val)
        }
    })
    return chunkedArr
}
console.log(chunkArray3([0,1,2,3,4,5,6], 2))
