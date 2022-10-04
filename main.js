//function accepts array and returns index of pivot number.
function findPivot(arr) {
    let leftSum = 0
    let rightSum = arr.reduce((a, b) => a+b)
    for (let i = 0; i < arr.length; i++) {
        if (leftSum === rightSum - leftSum - arr[i] ) {
            return i
        } else {
            leftSum += arr[i]
        }
    }
    return -1
}

console.log(findPivot([1,3,1,2,1,4])) // => 3
console.log(findPivot([1,2,3])) // => -1
console.log(findPivot([1,2,3,4,5,6,7,8])) // => 5