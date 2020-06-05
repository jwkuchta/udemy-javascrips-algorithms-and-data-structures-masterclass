// EXERCISE 15
// takes a string and returns a new string in reverse

const reverse = str => {
    if (str === '') return ''
    return reverse(str.substr(1)) + str.charAt(0)
}

// EXRECISE 16
// check if a string is a palindrome

const isPalindrome = str => {
    const reverse = str => {
        if (str === '') return ''
        return reverse(str.substr(1)) + str.charAt(0)
    }
    let newStr = reverse(str)
    if (newStr === str) return true
    return false
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// EXERCISE 17
// accepts an array and a callback
// returns true if a single value in the array returns true when passed to the callback

const someRecursive = (arr, callback) => {
    if (arr.length === 0) return false
    if (callback(arr[0])) return true
    return someRecursive(arr.slice(1), callback)
}

// EXERCISE 18
// accepts an array of arrays and returns a new array with values flattened

const flatten = arr => {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    } 
    return newArr
}