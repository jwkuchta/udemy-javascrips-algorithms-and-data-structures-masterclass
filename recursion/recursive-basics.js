// REGULAR (CALLS ITSELF)
const countDown = num => {
    if (num <= 0) {
        console.log('done!')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

const sumRange = num => {
    if (num === 1) return 1
    return num + sumRange(num-1)
}

// 4! = 4 * 3 * 2 * 1
const factorial = num => {
    let total = 1
    for (let i = num; i > 0; i --) {
        total *= i
    }
    return total
}

const recursiveFactorial = num => {
    if(num === 1) return 1 // because factorial of 1 is 1
    return num * recursiveFactorial(num - 1)
}

// RECURSION PITFALLS
// 1. no base case or the base case is wrong
// 2. forgetting to return
// 3. stack overflow! - recursion not stopping

// HELPER METHOD RECURSION (OUTER FUNCTION AND INSIDE A HELPER RECURSIVE FUNCTION)
// it's a pattern

const outer = input => {
    let outerScopeVariable = []

    const helper = helperInput => {
        helper(helperInput--)
    }

    helper(input)
    return outerScopeVariable
}

// for example

const collectOddValues = arr => {
    let newArr = []

    const helper = helperInput => {
        if (helperInput.length === 0) {
            return
        }

        if (helperInput[0] % 2 !== 0) {
            newArr.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)
    return newArr
}

// same thing with Pure Recursion (less readable)

const collectOddValues2 = arr => {
    let newArr = []
    if (arr.length === 0) return newArr
    if (arr[0] % 2 !== 0) newArr.push(arr[0])
    newArr = newArr.concat(collectOddValues2(arr.slice(1)))
    return newArr
}



