// it only works on problems with optimal substructure & overlapping problems
// OVERLAPPING PROBLEMS - subproblems that overlap. We can break down problems into smaller pieces
// and some of these pieces can be reused (like the Fibonacci sequence)
// OPTIMAL SUBSTRUCTURE - if an optimal solution for the problem can beconstructed 
// from optimal solutions for its subproblems (like Dijkstra's algorithm)

// Big O is O(2 ** n)
const fibonacci = n => {
    if (n === 1 || n === 2) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

const memoFib = n => {
    let memo = {} 
    
    const fib = n => {
        let value
        if (n in memo) {
            value = memo[n]
        } else {
            if (n === 1 || n === 2) {
                value = 1
            } else {
                value = (fib(n-1) + fib(n-2))   
            }
            memo[n] = value
        }
        console.log(memo)
        return value
    }
    // when I console.log(memo) here it is empty, why?
    // console.log(memo)
    return fib(n)
}
const range = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr
}

let oneToHundred = range(1, 100)

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(9))
console.log(fibonacci(10))

for (let num of oneToHundred) {
    console.log(num, ":", memoFib(num))
}
