// EXERCISE 3 

const sameFrequency = (nums1, nums2) => {
    let arr1 = nums1.toString('10').split('')
    let arr2 = nums2.toString('10').split('')
    if (arr1.length !== arr2.length) return false
    let counter1 = {}
    let counter2 = {}
    for (let digit of arr1) {
        counter1[digit] ? counter1[digit] += 1 : counter1[digit] = 1
    }
    for (let digit of arr2) {
        counter2[digit] ? counter2[digit] +=1 : counter2[digit] = 1
    }
    console.log(counter2, counter2)
    for (let key in arr1) {
        if (!(key in arr2)) {
            return false
        } else if (counter1[key] !== counter2[key]) {
            return false
        }
    }
    return true
}

console.log(sameFrequency(182, 281))// true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false

// EXERCISE 4
// WITHOUT A SLIDER, JUST COUNTER

const areThereDuplicates1 = (...args) => {
    let counter = {}
    for (let arg of args) {
        counter[arg] ? counter[arg] += 1 : counter[arg] = 1
        console.log(counter)
        if (counter[arg] > 1) {
            return true
        }
    }
    return false
}

console.log(areThereDuplicates1(1, 2, 3)) // false
console.log(areThereDuplicates1(1, 2, 2)) // true
console.log(areThereDuplicates1('a', 'b', 'c', 'a')) // true

// EXERCISE 4
// WITH A SLIDER, JUST COUNTER

// this was his solution, but it does not work for the array of letters

const areThereDuplicates2 = (...args) => {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

console.log(areThereDuplicates2(1, 2, 3)) // false
console.log(areThereDuplicates2(1, 2, 2)) // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')) // true

// WITH A SET

const areThereDuplicates3 = (...arguments) => {
    // eliminates duplicates and then checks if the new set is equal in length to the original array
    return new Set(arguments).size !== arguments.length
}

console.log(areThereDuplicates3(1, 2, 3)) // false
console.log(areThereDuplicates3(1, 2, 2)) // true
console.log(areThereDuplicates3('a', 'b', 'c', 'a')) // true

// EXERCISE 5 - MULTIPLE POINTERS - AVERAGE PAIR
const averagePair = (arr, avg) => {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let result = (arr[start] + arr[end]) / 2
        if (result === avg) return true
        else if (result < avg) start++
        else end--
    }
    return false
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 5, 3, 6, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false

// EXERCISE 6 - MULTIPLE POINTERS - IS SUBSEQUENCE
// with pointers

const isSubsequence = (str1, str2) => {
    let i = 0
    let j = 0
    if (!str1) return true
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++
        if (i === str1.length) return true
        j++
    }
    return false
}

// recursive but not O(1) Space

const isSubsequence2 = (str1, str2) => {
    if (str1.length === 0) return true
    if (str2.length === 0) return false
    if (str2[0] === str1[0]) return isSubsequence2(str1. slice(1))
    return isSubsequence2(str1, str2.slice(1))
}

// EXERCISE 7 - MAX SUBARRAY SUM
const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null
    let max = 0
    let temp = 0

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

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([2, 3], 3)) // null

// EXERCISE 8 - MIN SUBARRAY LENGTH

const minSubArrayLen = (nums, sum) => {
    let total = 0
    let start = 0
    let end = 0
    let minLen = Infinity

    while (start < nums.length) {
        // if current window does not add up to sum, move window to the right
        if (total < sum && end < nums.length) {
            total += nums[end]
            end++
        
        }
        // if current window adds up to at least the sum we can shrink the window 
        else if (total >= sum) {
            minLen = Math.min(minLen, end-start)
            total -= nums[start]
            start++
        } else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), 39) // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // 0



