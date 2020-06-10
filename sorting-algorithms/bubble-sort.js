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
const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                swap1(arr, j, i)
            }
        }
    }
    return arr
}

// const bubbleSort = arr => {
//     for (let i = arr.length-1; i > arr.length; i--) {
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[j+1])
//         }
//     }
// }
