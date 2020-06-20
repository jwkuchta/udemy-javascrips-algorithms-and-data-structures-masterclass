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

// stringSearch('lola loled', 'lol') 

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

// skips overlapping substrings, not a good solution
const binaryPatternMatching2 = (binary, string) => {
    return string.split("").map( (v,i) => !("aeiou".indexOf(v) > -1) * 1).join("").match(new RegExp(binary,"g")).length
}

function binaryPatternMatching3(needle, haystack) {
    haystack = haystack.replace(
        /[aeiouy]/gi, '0'
    ).replace(/[bcdfghjklmnpqrstvwxz]/gi, '1'
    )
    let matches = []
    let count = 0
    let stop = haystack.length - needle.length
    for (let i = 0; i <= stop; i++) {
        if (haystack.substr(i, needle.length) == needle) 
        count++
        
    } 
    return count, matches
}

function fun1(str, k) {
    let rtn = [];
    for (let i = 0; i < str.length - k + 1; i++) {
      let current = str.substr(i, k);
      rtn.push(current)
    }
    return rtn;
}

function binaryPatternMatching4(needle, haystack) {
    haystack = haystack.replace(
        /[aeiouy]/gi, '0'
    ).replace(
        /[bcdfghjklmnpqrstvwxz]/gi, '1'
    )
    let matches = 0
    let stop = haystack.length - needle.length
    for (let i = 0; i <= stop; i++) {
        let substring = haystack.substr(i, needle.length)
        console.log(substring)
        if (substring == needle) {
            matches++
        }    
    } 
    return matches
}

console.log(binaryPatternMatching4('010', 'amazing'))





  



