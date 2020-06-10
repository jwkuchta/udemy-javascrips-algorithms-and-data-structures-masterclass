// also called "sinking sort" and it involves swapping

// not the most efficient or widely used but it is fun
// it can be optimized and excell in certain cases

// large values bubble to the top
// visualgo.net

// ES5
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
            console.log(arr, 'i: ', i, 'arr[j]: ', arr[j], 'j: ', j, 'arr[j+1]: ', arr[j+1])
            if (arr[j] > arr[j+1]) {
                swap1(arr, j, j+1)
            }
        }
        console.log('one pass complete')
    }
    return arr
}

// OUTPUT - O(N**2)
// [ 30, 29, 1, 4, 6, 100 ] i:  0 arr[j]:  30 j:  0 arr[j+1]:  29
// [ 29, 30, 1, 4, 6, 100 ] i:  0 arr[j]:  30 j:  1 arr[j+1]:  1
// [ 29, 1, 30, 4, 6, 100 ] i:  0 arr[j]:  30 j:  2 arr[j+1]:  4
// [ 29, 1, 4, 30, 6, 100 ] i:  0 arr[j]:  30 j:  3 arr[j+1]:  6
// [ 29, 1, 4, 6, 30, 100 ] i:  0 arr[j]:  30 j:  4 arr[j+1]:  100
// [ 29, 1, 4, 6, 30, 100 ] i:  0 arr[j]:  100 j:  5 arr[j+1]:  undefined
// one pass complete
// [ 29, 1, 4, 6, 30, 100 ] i:  1 arr[j]:  29 j:  0 arr[j+1]:  1
// [ 1, 29, 4, 6, 30, 100 ] i:  1 arr[j]:  29 j:  1 arr[j+1]:  4
// [ 1, 4, 29, 6, 30, 100 ] i:  1 arr[j]:  29 j:  2 arr[j+1]:  6
// [ 1, 4, 6, 29, 30, 100 ] i:  1 arr[j]:  29 j:  3 arr[j+1]:  30
// [ 1, 4, 6, 29, 30, 100 ] i:  1 arr[j]:  30 j:  4 arr[j+1]:  100
// [ 1, 4, 6, 29, 30, 100 ] i:  1 arr[j]:  100 j:  5 arr[j+1]:  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] i:  2 arr[j]:  1 j:  0 arr[j+1]:  4
// [ 1, 4, 6, 29, 30, 100 ] i:  2 arr[j]:  4 j:  1 arr[j+1]:  6
// [ 1, 4, 6, 29, 30, 100 ] i:  2 arr[j]:  6 j:  2 arr[j+1]:  29
// [ 1, 4, 6, 29, 30, 100 ] i:  2 arr[j]:  29 j:  3 arr[j+1]:  30
// [ 1, 4, 6, 29, 30, 100 ] i:  2 arr[j]:  30 j:  4 arr[j+1]:  100
// [ 1, 4, 6, 29, 30, 100 ] i:  2 arr[j]:  100 j:  5 arr[j+1]:  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] i:  3 arr[j]:  1 j:  0 arr[j+1]:  4
// [ 1, 4, 6, 29, 30, 100 ] i:  3 arr[j]:  4 j:  1 arr[j+1]:  6
// [ 1, 4, 6, 29, 30, 100 ] i:  3 arr[j]:  6 j:  2 arr[j+1]:  29
// [ 1, 4, 6, 29, 30, 100 ] i:  3 arr[j]:  29 j:  3 arr[j+1]:  30
// [ 1, 4, 6, 29, 30, 100 ] i:  3 arr[j]:  30 j:  4 arr[j+1]:  100
// [ 1, 4, 6, 29, 30, 100 ] i:  3 arr[j]:  100 j:  5 arr[j+1]:  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  1 j:  0 arr[j+1]:  4
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  4 j:  1 arr[j+1]:  6
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  6 j:  2 arr[j+1]:  29
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  29 j:  3 arr[j+1]:  30
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  30 j:  4 arr[j+1]:  100
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  100 j:  5 arr[j+1]:  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] i:  5 arr[j]:  1 j:  0 arr[j+1]:  4
// [ 1, 4, 6, 29, 30, 100 ] i:  5 arr[j]:  4 j:  1 arr[j+1]:  6
// [ 1, 4, 6, 29, 30, 100 ] i:  5 arr[j]:  6 j:  2 arr[j+1]:  29
// [ 1, 4, 6, 29, 30, 100 ] i:  5 arr[j]:  29 j:  3 arr[j+1]:  30
// [ 1, 4, 6, 29, 30, 100 ] i:  5 arr[j]:  30 j:  4 arr[j+1]:  100
// [ 1, 4, 6, 29, 30, 100 ] i:  5 arr[j]:  100 j:  5 arr[j+1]:  undefined
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ]

// as i goes down so does j and we have fewer loops 4, 3, 2, 1
const betterBubbleSort = arr => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i-1; j++) {
            console.log(arr, 'i: ', i, 'arr[j]: ', arr[j], 'j: ', j, 'arr[j+1]: ', arr[j+1])
            if (arr[j] > arr[j+1]) {
                swap1(arr, j, j+1)
            }
        }
        console.log('one pass complete')
    }
    return arr
}

// OUTPUT - O(LOG N) ???
// [ 30, 29, 1, 4, 6, 100 ] i:  6 arr[j]:  30 j:  0 arr[j+1]:  29
// [ 29, 30, 1, 4, 6, 100 ] i:  6 arr[j]:  30 j:  1 arr[j+1]:  1
// [ 29, 1, 30, 4, 6, 100 ] i:  6 arr[j]:  30 j:  2 arr[j+1]:  4
// [ 29, 1, 4, 30, 6, 100 ] i:  6 arr[j]:  30 j:  3 arr[j+1]:  6
// [ 29, 1, 4, 6, 30, 100 ] i:  6 arr[j]:  30 j:  4 arr[j+1]:  100
// one pass complete
// [ 29, 1, 4, 6, 30, 100 ] i:  5 arr[j]:  29 j:  0 arr[j+1]:  1
// [ 1, 29, 4, 6, 30, 100 ] i:  5 arr[j]:  29 j:  1 arr[j+1]:  4
// [ 1, 4, 29, 6, 30, 100 ] i:  5 arr[j]:  29 j:  2 arr[j+1]:  6
// [ 1, 4, 6, 29, 30, 100 ] i:  5 arr[j]:  29 j:  3 arr[j+1]:  30
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  1 j:  0 arr[j+1]:  4
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  4 j:  1 arr[j+1]:  6
// [ 1, 4, 6, 29, 30, 100 ] i:  4 arr[j]:  6 j:  2 arr[j+1]:  29
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] i:  3 arr[j]:  1 j:  0 arr[j+1]:  4
// [ 1, 4, 6, 29, 30, 100 ] i:  3 arr[j]:  4 j:  1 arr[j+1]:  6
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ] i:  2 arr[j]:  1 j:  0 arr[j+1]:  4
// one pass complete
// one pass complete
// [ 1, 4, 6, 29, 30, 100 ]
