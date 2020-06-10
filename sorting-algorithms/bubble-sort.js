// also called "sinking sort" and it involves swapping

// not the most efficient or widely used but it is fun
// it can be optimized and excell in certain cases

// large values bubble to the top
// visualgo.net

// ES5

let nums = [30, 29, 1, 4, 6, 100]

const swap1 = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

// ES2015
const swap2 = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

// PSEUDOCODE
// start looping with i at the end of the array, towards the beginning
// start an inner loop with j from the beginning until i-1
// if arr[j] is greater than arr[j+1], swap the two values
// return the sorted array

// less optimized verion
// it goes through the loop til the end even if the array 
const bubbleSort = arr => {
    for (let i=0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, i, j, 'comparing ', arr[j], 'and ', arr[j+1])
            if (arr[j] > arr[j+1]) {
                swap1(arr, j, j+1)
            }
        }
        console.log('one pass complete')
    }
    return arr
}

// OUTPUT - O(N**2)
// [ 30, 29, 1, 4, 6, 100 ] 0 0 comparing  30 and  29
// [ 29, 30, 1, 4, 6, 100 ] 0 1 comparing  30 and  1
// [ 29, 1, 30, 4, 6, 100 ] 0 2 comparing  30 and  4
// [ 29, 1, 4, 30, 6, 100 ] 0 3 comparing  30 and  6
// [ 29, 1, 4, 6, 30, 100 ] 0 4 comparing  30 and  100
// [ 29, 1, 4, 6, 30, 100 ] 0 5 comparing  100 and  undefined
// one pass complete
// [ 29, 1, 4, 6, 30, 100 ] 1 0 comparing  29 and  1
// [ 1, 29, 4, 6, 30, 100 ] 1 1 comparing  29 and  4
// [ 1, 4, 29, 6, 30, 100 ] 1 2 comparing  29 and  6
// [ 1, 4, 6, 29, 30, 100 ] 1 3 comparing  29 and  30
// [ 1, 4, 6, 29, 30, 100 ] 1 4 comparing  30 and  100
// [ 1, 4, 6, 29, 30, 100 ] 1 5 comparing  100 and  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] 2 0 comparing  1 and  4
// [ 1, 4, 6, 29, 30, 100 ] 2 1 comparing  4 and  6
// [ 1, 4, 6, 29, 30, 100 ] 2 2 comparing  6 and  29
// [ 1, 4, 6, 29, 30, 100 ] 2 3 comparing  29 and  30
// [ 1, 4, 6, 29, 30, 100 ] 2 4 comparing  30 and  100
// [ 1, 4, 6, 29, 30, 100 ] 2 5 comparing  100 and  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] 3 0 comparing  1 and  4
// [ 1, 4, 6, 29, 30, 100 ] 3 1 comparing  4 and  6
// [ 1, 4, 6, 29, 30, 100 ] 3 2 comparing  6 and  29
// [ 1, 4, 6, 29, 30, 100 ] 3 3 comparing  29 and  30
// [ 1, 4, 6, 29, 30, 100 ] 3 4 comparing  30 and  100
// [ 1, 4, 6, 29, 30, 100 ] 3 5 comparing  100 and  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] 4 0 comparing  1 and  4
// [ 1, 4, 6, 29, 30, 100 ] 4 1 comparing  4 and  6
// [ 1, 4, 6, 29, 30, 100 ] 4 2 comparing  6 and  29
// [ 1, 4, 6, 29, 30, 100 ] 4 3 comparing  29 and  30
// [ 1, 4, 6, 29, 30, 100 ] 4 4 comparing  30 and  100
// [ 1, 4, 6, 29, 30, 100 ] 4 5 comparing  100 and  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] 5 0 comparing  1 and  4
// [ 1, 4, 6, 29, 30, 100 ] 5 1 comparing  4 and  6
// [ 1, 4, 6, 29, 30, 100 ] 5 2 comparing  6 and  29
// [ 1, 4, 6, 29, 30, 100 ] 5 3 comparing  29 and  30
// [ 1, 4, 6, 29, 30, 100 ] 5 4 comparing  30 and  100
// [ 1, 4, 6, 29, 30, 100 ] 5 5 comparing  100 and  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ]

