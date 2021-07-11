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