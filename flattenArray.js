// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array

function flattenArray(arrays) {
    let flattenedArr = []
    arrays.forEach(array => {
        array.forEach(element => flattenedArr.push(element))
    });
    return flattenedArr
}

console.log(flattenArray([[0,1],[2,3,4],[5,6]]))
console.log([0,1,2,3,4,5,6])

//////////////////////////////////////////////////////////////////////////////////////////////////////

function flattenArray2(arrays) {
    return arrays.reduce(function(a, b) {
        return a.concat(b)
    })
}

console.log(flattenArray2([[0,1],[2,3,4],[5,6]]))

/////////////////////////////////////////////////////////////////////////////////////////////////////

function flattenArray3(arrays) {
    return [].concat.apply([], arrays)
}

console.log(flattenArray3([[0,1],[2,3,4],[5,6]]))

////////////////////////////////////////////////////////////////////////////////////////////////////

function flattenArray4(arrays) {
    return [].concat(...arrays)
}

console.log(flattenArray4([["a","b"],["c","d","e"],["f","g"]]))