// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344180#questions/11073916
// no direct comparisons and works on lists of numbers (or data converted to numbers)
// it compares digits - more digits === bigger number

// we need a few helper methods

// given a number and a position, will return the digit at that position (right to left)
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

// next helper - to see how many digits are in a number so we know how many buckets we need
const digitCount = num => {
    // otherwise we would get -Infinity
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// returns the number of digits in the largest number
const mostDigits = nums => {
    let maxDigits = 0
    for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num))
    }
    return maxDigits
}

// radixSort PSEUDOCODE
// 1. define a function that accepts a list of numbers
// 2. figure out how many digits the largest number has
// 3. loop from 0 to largest number of digits and for each iteration of the loop
// a. create a bucket for each digit (0-9)
// b. place each number in the corresponding bucket then concatenate into one array
// 4. replace initial array with values in the buckets, starting with 0 and going up to 9
// 5. return list at the end

const radixSort = nums => {
    console.log('initial array: ', nums)
    let maxDigitCount = mostDigits(nums)
    // loops over each number maxDigitCount times
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            // gets digit at position k and assigns tto variable digit
            let digit = getDigit(nums[i], k)
            // pushes the whole number into the array corresponding to the last digit
            digitBuckets[digit].push(nums[i])
            // array with recently pushed digit
            console.log('inner loop done, after push: ', digitBuckets)
        }
        // after each outer loop, concat current buckets into a new nums array
        // restart loop for k++
        console.log('digitBuckets: ', digitBuckets)
        nums = [].concat(...digitBuckets)
        console.log('outer loop done, nums: ', nums)
    }
    return nums
    
}

// console.log(radixSort([12345, 12, 1, 1234, 123]))
console.log(radixSort([23, 345, 5467, 12, 2345]))
