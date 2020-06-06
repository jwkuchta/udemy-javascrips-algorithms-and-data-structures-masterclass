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

// EXERCISE 19
// given an array of strings, capitalize first letter of each string

const capitalizeFirst = array => {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].slice(1)]
  }
  return capitalizeFirst(array.slice(0, -1)).push(array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].slice(1))
}

// EXERCISE 20
// return the sum of all even numbers in an object (may contain nested object)

const nestedEvenSum  = (obj, sum=0) => {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum
}
  
let obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }
    }
}
  
let obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
}
  
nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

// EXERCISE 21
// given an array return a new array with all words capitalized

const capitalizeWords = array => {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let result = capitalizeWords(array.slice(0, -1));
    result.push(array.slice(array.length-1)[0].toUpperCase());
    return result
}

// EXERCISE 22
// takes in an object and finds all numbers and converts them to strings (return new obj)

const stringifyNumbers = obj => {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
        newObj[key] = obj[key];
        }
    }
    return newObj
}

// EXERCISE 23
// accepts an object and returns an array of all the strings

const collectStrings1 = obj => {
    let stringsArr = [];
 
    const gatherStrings = (o) => {
        for(let key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj)
 
    return stringsArr
}

const collectStrings2 = obj => {
    let stringsArr = [];
    for(let key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr
}


