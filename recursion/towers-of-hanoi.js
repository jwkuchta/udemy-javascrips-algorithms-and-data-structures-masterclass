const hanoi = (n, source, target, spare) => {
    let count = 0
    if (n === 1) {
        move(source, target)
        count++
    } else {
        hanoi(n-1, source, spare, target)
        move(source, target)
        count++
        hanoi(n-1, spare, target, source)
    }
    return count
}

const move = (a, b) => {
    b.push(a.pop().content)
}

console.log(hanoi([5, 4, 3, 2, 1], [], [], []))