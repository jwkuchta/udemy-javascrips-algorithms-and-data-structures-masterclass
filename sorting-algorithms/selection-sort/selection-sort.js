// sorted data accumulates at the beginning
// put the smallest item in the array at the beginning

// PSEUDOCODE
// store the first element as the smallest value in the array
// compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, make that smaller number the new minimum and continue
// if the minimum value is not the value you initially started with, swap the two values
// repeat with next element until the array is sorted

let nums = [30, 29, 1, 4, 6, 100]

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        swap(arr, i, min)
    }
    return arr
}