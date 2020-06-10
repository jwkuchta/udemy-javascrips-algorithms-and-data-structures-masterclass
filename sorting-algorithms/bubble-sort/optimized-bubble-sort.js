// optimizig the loop so it does not compare again numbers that were not swapped before

// optimized with noSwaps - O(n)
const betterBubbleSort = arr => {
    let noSwaps
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i-1; j++) {
            console.log(arr, i, j, 'comparing ', arr[j], 'and ', arr[j+1])
            if (arr[j] > arr[j+1]) {
                let temp = arr[i]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
                console.log('no swaps!')
            }
        }
        console.log('one pass complete')
        if(noSwaps) break
    }
    return arr
}