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

function binaryPatternMatching4(pattern, string) {
    string = string.replace(
        /[aeiouy]/gi, '0'
    ).replace(
        /[bcdfghjklmnpqrstvwxz]/gi, '1'
    )
    let matches = 0
    let stop = string.length - pattern.length
    for (let i = 0; i <= stop; i++) {
        let substring = string.substr(i, pattern.length)

        if (substring == pattern) {
            matches++
        }    
    } 
    return matches
}

function binaryPatternMatching5(pattern, s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    
    // create an array of parts of s based on the length of the pattern
    let parts = [];
    for (let i = 0; i < s.length - pattern.length; i++) {
        let end = i + pattern.length;
        let sub = s.substring(i, end);
        parts.push(sub)
    }
    let matches = 0;
    
    for (let part of parts) {
        let isPatternMatch = true;
        // start off as true, if at least one fails then this will be false for the s part
        
    
        for (let letter = 0; letter < part.length; letter++) {
            let partLetter = part[letter];
            let patterDigit = pattern[letter];
            let isVowel = vowels.includes(partLetter) ? 0 : 1;
            let isMatch = isVowel === parseInt(patterDigit);

            if (!isMatch) {
                isPatternMatch = false;
            }
        }
        console.log(`${part} — ${pattern} — ${isPatternMatch}`)
        if (isPatternMatch) {
            matches++;
        }
    } 
    return matches;
}

console.log(binaryPatternMatching4('010', 'amazing'))





  



