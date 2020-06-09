// eliminate half of the eliminated elements but the data has to be sorted

let states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

// BINARY SEARCH PSEUDOCODE

// accepts a sorted array (let's assume numbers for this exercise)
// create left pointer and right pointer
// while the left come before the right, loop and pick the middle
// if element === middle, return index
// if the value is too small, move the left pointer up
// if the value is too large, move the right pointer down
// if you don't find a value, return -1

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// binary search has a O(log n)
// every time we double the size of N, we add one extra step
// in the grand scheme of things O(log n) is as good as O(1)
const binarySearch = (array, element) => {
    let left = 0
    let right = array.length - 1
    
    // if we don't add the && it will keep looping in the case of a number that does not exist
    // it worked fine without in the repl
    while (left <= right && left <= right) {
        let middleIndex = Math.round((left + right) / 2)
        if (array[middleIndex] === element) return middleIndex
        if (array[middleIndex] > element) {
            // array = array.slice(0, array[right])
            right = middleIndex -1
        } 
        if (array[middleIndex] < element) {
            left = middleIndex + 1
        }
    }
    console.log(left, right, middleIndex)
    return -1
}

binarySearch(nums, 5)