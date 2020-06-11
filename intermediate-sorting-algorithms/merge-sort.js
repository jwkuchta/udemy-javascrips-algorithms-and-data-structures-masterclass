// faster sorts
// better time complexity to O(n log n)
// less readable

// this one was created in 1948 by Jonathan Van Neuman for ed-vac
// works by decomposing the array into smaller sub-arrays until we end up with single element arrays
// first split, then sort, then merge, then sort

// O(n + m)

// write a function that merges two sorted arrays
// create an empty array and look at the smallest values in each array
// while there is still values we have not looked at:
// if the value in the first array is smaller than the value in the second array,
// push it into the result array and move on to the next value in the first array
// if the value in the first array is larger than the value in the second array,
// push it into the result array and move on to the next value in the first array
const merge = (arr1, arr2) => {
    let mergedArr = []
    let i = 0
    let j = 0

    while (arr1.length > i && arr2.length > j) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i])
            console.log(mergedArr)
            i++
        } else {
            mergedArr.push(arr2[j])
            console.log(mergedArr)
            j++
        }
    }
    // to make sure remaining elements in the longer array get added to the mergedArr
    while (i < arr1.length) {
        mergedArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j])
        j++
    }
    console.log(mergedArr)
    return mergedArr
}

merge([1, 10, 50], [2, 14, 99, 100])

// define mergeSort function that takes an array
// keep splitting up into smaller arrays until length is one
// call merge on all small arrays recursively

const mergeSort = arr => {
    // base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

console.log(mergeSort([45,2,90,1,60,100,3]))

// time complexity of mergeSort is O(n log n)
// doubling the array adds 1 step
// as n grows, the number of steps grows at log n speed
// space complecity is O(n)