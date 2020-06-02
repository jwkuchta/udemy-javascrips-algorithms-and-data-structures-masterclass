// two pointers moving in some direction

const countUniqueValues = arr => {
    if (arr.length === 0) return 0
    // i pointer does not move, that's why we only need a loop for j
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6, 6, 12, 12, 16])) // 7
console.log(countUniqueValues([])) // 0
