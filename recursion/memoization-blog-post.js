const fib = num => {
    if (num === 1 || num === 2) return 1
    return fib(num-1) + fib(num-2)
}
  
  // for (let num of Array(5).keys()) {
  //   console.log(num, fib(num))
  // }
  
  // console.log(Array.from(new Array(21), (x,i) => i))
  
const range1 = num => {
    console.log('this is range1: ')
    return Array.from(new Array(num + 1), (x, i) => i)
}
  
const range2 = num => {
    console.log('this is range2: ')
    return Array.from(Array(num + 1).keys())
}
  
const range3 = num => {
    console.log('this is range3: ')
    return [...Array(num + 1).keys()]
}
  
const range4 = num => {
    console.log('this is range4: ')
    return Array(num).fill(1).map((x, y) => x + y)
}
  