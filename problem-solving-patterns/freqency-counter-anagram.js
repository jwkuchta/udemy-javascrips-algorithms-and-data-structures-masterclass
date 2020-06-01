// uses frequency counter pattern with letters

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    let counter = {}
    for (let char of str1) {
        counter[char] ? counter[char] += 1 : counter[char] = 1
    }
    console.log(counter)
   for (let char of str2) {
       if (!counter[char]) {
           return false
       } else {
           counter[char] -= 1
       }
   }
   return true
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('qwerty', 'qeywrt')) // true