// there are situations where it does well

// PSEUDOCODE
// start by picking second element in the array
// compare the second element with the one before it and if necessary, swap
// continue to the next element, and if it is in the incorrect order, 
// loop over sorted portion (left side) and place element in the correct spot
// repeat til sorted

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        // it does not work with let because of scoping!
        for (var j = i-1; j >=0 && arr[j] > currentVal; j--) {
            // we move one backward if condition met
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
        console.log(arr, currentVal)
    }
    return arr
}

// Big O is O(n**2)
// good for when data is coming live and we need to insert it at a moment's notice