// similar asumption to mergesort
// we keep splitting the data until we have 1 or 0 elements (individually sorted)
// what is different?
// you work by selecting an element (called the "pivot") and then move nums larger to right and smaller to left
// then we repeat the process recursively for left side and right side

// pivot helper
// accepts three arguments: the array, the start index, the end index
// set pivot to arr[0] and store current pivot index in a variable
// loop through array from start to end 
// if the pivot us greater than the current element, incremenent the pivot index
// and then swap the current element with the element at the pivot index
// swap the starting element (the pivot) with the pivot index
// return the pivot index

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

// helper method to keep track of the pivots - we will call the pivot helper on the array
// when the helper returns the updated pivot index, we will recursively call the pivot helper
// on the subarray to the left of that index, and the subarray to the right of that index
const pivot = (arr, start = 0, end = arr.length+1) => {
    let pivot = arr[start]
    let swapIndex = start

    for(let i = start +1; i <arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, i, swapIndex)
            // console.log(arr)
        }
    }
    swap(arr, start, swapIndex)
    // console.log(arr)
    return swapIndex
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])) // 3

const quickSort = (arr, left=0, right=arr.length-1) => {
    // if left is less, that means that the pointer is not done
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) // 3
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}

console.log(quickSort([4, 6, 9, 1, 2, 5]))

// time complexity is O(n log n) at best and O(n) at worst (if the data is already sorted)
// if the pivot is the min/max element every time
// that's why it might be a good idea to pick a random number for pivot
// space complexity is 