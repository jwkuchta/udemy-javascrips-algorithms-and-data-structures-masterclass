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