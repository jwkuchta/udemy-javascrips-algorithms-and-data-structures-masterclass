// naive solution O(n**2)

let arr1 = [1, 2, 3]
let arr2 = [4, 9, 1]
let arr3 = [4, 4, 1]

const same = (arr1, arr2) => {
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