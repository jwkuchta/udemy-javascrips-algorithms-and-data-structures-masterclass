// naive string search

// find a substring in a string

// PSEUDOCODE
// loop over both strings
// if the characters don't match, break out of the loop
// if you find a match update the counter
const stringSearch = (string, substring) => {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < substring.length; j++) {
            console.log(string[i], substring[i+j])
            if (substring[j] !== string[i+j]) {
                console.log('break!')
                break  
            }
            if(j === substring.length -1) {
                console.log('found one!')
                count++
            }
        }
    }
    return count
}

stringSearch('lola loled', 'lol') // 2

// given a pattern of 1s and 0s and a string of all lowercase letters, 
// where 1 corresponds to a consonant and 0 corresponds to a vowel, 
// count how many consecutive matches are in the string

const binaryPatternMatching = (pattern, s) => {
    let subStrings = s.split('')
    let arrayInBinary = []
    for (let char of subStrings) {
      if (/[aeiouy]/.test(char) === true) {
        arrayInBinary.push(0)
      } else if (/[bcdfghjklmnpqrstvwxz]/.test(char) === true) {
        arrayInBinary.push(1)
      } else {
        arrayInBinary.push(' ')
      }
    }
    let count = 0
    let string = arrayInBinary.join('')
    console.log(s)
    console.log(arrayInBinary, arrayInBinary.length)
    console.log(string)
    let substring = pattern
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < substring.length; j++) {
            if (substring[j] !== string[i+j]) {
                break  
            }
            if(j === substring.length -1) {
                count++
            }
        }
    }
    return count
}