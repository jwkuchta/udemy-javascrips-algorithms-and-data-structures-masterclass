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
    return num * factorial(num - 1)
}