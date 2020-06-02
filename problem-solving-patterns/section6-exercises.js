// EXERCISE 3 

const sameFrequency = (nums1, nums2) => {
    let arr1 = nums1.toString('10').split('')
    let arr2 = nums2.toString('10').split('')
    if (arr1.length !== arr2.length) return false
    let counter1 = {}
    let counter2 = {}
    for (let digit of arr1) {
        counter1[digit] ? counter1[digit] += 1 : counter1[digit] = 1
    }
    for (let digit of arr2) {
        counter2[digit] ? counter2[digit] +=1 : counter2[digit] = 1
    }
    console.log(counter2, counter2)
    for (let key in arr1) {
        if (!(key in arr2)) {
            return false
        } else if (counter1[key] !== counter2[key]) {
            return false
        }
    }
    return true
}

console.log(sameFrequency(182, 281))// true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false

// EXERCISE 4
// WITHOUT A SLIDER, JUST COUNTER

const areThereDuplicates1 = (...args) => {
    let counter = {}
    for (let arg of args) {
        counter[arg] ? counter[arg] += 1 : counter[arg] = 1
        console.log(counter)
        if (counter[arg] > 1) {
            return true
        }
    }
    return false
}

console.log(areThereDuplicates1(1, 2, 3)) // false
console.log(areThereDuplicates1(1, 2, 2)) // true
console.log(areThereDuplicates1('a', 'b', 'c', 'a')) // true

// EXERCISE 4
// WITH A SLIDER, JUST COUNTER

// this was his solution, but it does not work for the array of letters

const areThereDuplicates2 = (...args) => {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

console.log(areThereDuplicates2(1, 2, 3)) // false
console.log(areThereDuplicates2(1, 2, 2)) // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')) // true

// WITH A SET

const areThereDuplicates3 = (...arguments) => {
    // eliminates duplicates and then checks if the new set is equal in length to the original array
    return new Set(arguments).size !== arguments.length
}

console.log(areThereDuplicates3(1, 2, 3)) // false
console.log(areThereDuplicates3(1, 2, 2)) // true
console.log(areThereDuplicates3('a', 'b', 'c', 'a')) // true

