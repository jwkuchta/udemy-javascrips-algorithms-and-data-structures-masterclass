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
