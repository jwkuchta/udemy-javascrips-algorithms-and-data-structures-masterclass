// hash tables are used to store key value pairs. The keys are not ordered.
// they are used commonly because of their speed
// we will implement our own hash table

// what makes a good hash function?
// 1. it's fast (i.e. constant time)
// 2. it distributes things uniformly
// 3. it is deterministic (we get the same output per one given input)

// basic hashing function

const hash = (key, arrLen) => {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrLen
    }
}

// problems?
// only hashes strings
// not constant time
// not really random
// a prime number arrLen reduces the number of colitions drastically

const betterHash = (key, arrLen) => {
    let total = 0
    // prime numbers often used in hashes
    let WEIRD_PRIME = 31
    // loop key.length times or max 100
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) -96
        total = (total * WEIRD_PRIME + value) % arrLen
    }
    return total
}
