// find substring or subarray
// usually we move the window from left to right and keep track of a subset of data

// naive/simple solution 
const maxSubarraySum = (arr, num) => {
    if (num > arr.length) {
        return null
    }
    let max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0
        for (let j = 0; j < num; j++) {
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp
        }
    }
    return max
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 1)) // 8
console.log(maxSubarraySum([], 2)) // null