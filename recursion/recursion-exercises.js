// EXERCISE 10
// write a function that accepts a base and an exponent.
// it should return the power of the base to the exponent (mimic Math.pow())
const power = (base, exponent) => {
    if (exponent === 0) return 1
    // if (exponent === 1) return base
    return power(base, exponent-1) * base
}

// EXERCISE 11
// 4! is factorial four which is 4 * 3 * 2 * 1 = 24
// 0! is always 1
const factorial = num => {
    if (num === 0) return 1
    return factorial(num-1) * num
}

// EXERCISE 12
// takes in an array and returns a product (all nums multiplied by each other)
const productOfArray = arr => {
    if (arr.length === 1) return arr[0]
    return productOfArray(arr.slice(1)) * arr[0]
}

// EXERCISE 13
// accepts a number and adds up all the numbers from 0 to the number
const recursiveRange = num => {
    let numsArr = []
    for (let i = 0; i <= num; i++) {
        numsArr.push(i)
    }
    console.log(numsArr)
    if (arr.length === 1) return numsArr[0]
    return recursiveRange(arr.slice(1)) + arr[0]
}

// better solution no loop
const recursiveRange = num => {
    if (num === 1) return 1
    return recursiveRange(num-1) + num
}

// EXERCISE 14 - FIB 
// accepts a number and returns the nth number in the Fibonacci sequence
const fib = num => {
    if (num === 1 || num === 2) return 1
    return fib(num-1) + fib(num-2)
}
