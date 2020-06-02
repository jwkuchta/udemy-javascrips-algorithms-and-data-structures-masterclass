// naive solution O(N**2)

let arr1 = [1, 2, 3]
let arr2 = [4, 9, 1]
let arr3 = [4, 4, 1]

const same1 = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        // what is the index of i squared in the second array
        // this could also be a nested loop instead of indexOf
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if it's not in there, return false
        if (correctIndex === -1) {
            return false
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true
}

//  better solution - time complexity of O(N), less readable but much more efficient
//  loop over each array one time individually, it will be O(N) instead of O(N**2)

function same2 (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        // frequencyCounter1[val] ? frequencyCounter1[val] = 1 : frequencyCounter1[val] += 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        // frequencyCounter2[val] ? frequencyCounter2[val] = 1 : frequencyCounter2[val] += 1
    }
    for (let key in arr1) {
        if (!(key ** 2 in arr2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}


