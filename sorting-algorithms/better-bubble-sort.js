// as i goes down so does j and we have fewer loops 4, 3, 2, 1
// the end is sorted so we do not have to include it
const betterBubbleSort = arr => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i-1; j++) {
            console.log(arr, i, j, 'comparing ', arr[j], 'and ', arr[j+1])
            if (arr[j] > arr[j+1]) {
                swap1(arr, j, j+1)
            }
        }
        console.log('one pass complete')
    }
    return arr
}

// OUTPUT - O(LOG N) ???
// [ 30, 29, 1, 4, 6, 100 ] 6 0 comparing  30 and  29
// [ 29, 30, 1, 4, 6, 100 ] 6 1 comparing  30 and  1
// [ 29, 1, 30, 4, 6, 100 ] 6 2 comparing  30 and  4
// [ 29, 1, 4, 30, 6, 100 ] 6 3 comparing  30 and  6
// [ 29, 1, 4, 6, 30, 100 ] 6 4 comparing  30 and  100
// one pass complete
// [ 29, 1, 4, 6, 30, 100 ] 5 0 comparing  29 and  1
// [ 1, 29, 4, 6, 30, 100 ] 5 1 comparing  29 and  4
// [ 1, 4, 29, 6, 30, 100 ] 5 2 comparing  29 and  6
// [ 1, 4, 6, 29, 30, 100 ] 5 3 comparing  29 and  30
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] 4 0 comparing  1 and  4
// [ 1, 4, 6, 29, 30, 100 ] 4 1 comparing  4 and  6
// [ 1, 4, 6, 29, 30, 100 ] 4 2 comparing  6 and  29
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] 3 0 comparing  1 and  4
// [ 1, 4, 6, 29, 30, 100 ] 3 1 comparing  4 and  6
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] 2 0 comparing  1 and  4
// one pass complete
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ]
