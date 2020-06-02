// find substring or subarray
// usually we move the window from left to right and keep track of a subset of data

// naive/simple solution, time complexity O(N**2)
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

// better solution, time complexity O(N)
const maxSubarraySum2 = (arr, num) => {
    let max = 0
    let temp = 0
    if (arr.length < num) return null
    for (let i = 0; i < num; i++) {
        max += arr[i]
    }
    temp = max
    for (let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i]
        max = Math.max(temp, max)
    }
    return max
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 1)) // 8
console.log(maxSubarraySum2([], 2)) // null