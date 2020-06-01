// linear structure where we are searching for a pair of values

// return first pair that returns zero || undefined in a sorted array

// naive solution, time complexity O(N**2)

// const sumZero = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

// this method works on unsorted and sorted arrays
const sumZero = (arr) => {
    for (let num1 of arr) {
        for (let num2 of arr) {
            if (num1 + num2 === 0) {
                return [num1, num2]
            }
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero([1, 2, 3])) // undefined

// more efficient solution with "pointers pattern" and time complexity of O(N)
const sumZero2 = arr => {
    let left = 0
    let right = arr.length -1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right --
        } else {
            left ++
        }
    }
}

console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
console.log(sumZero2([1, 2, 3])) // undefined