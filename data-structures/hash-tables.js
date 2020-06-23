const { generateKeyPairSync } = require("crypto")

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }

    // my solution
    get(key) {
        let index = this._hash(key)
        // console.log(index)
        if (this.keyMap[index]) {
            if (this.keyMap[index].length === 1) {
                console.log(this.keyMap[index])
                return this.keyMap[index][1]
            } else {
                for (let arr of this.keyMap[index]) {
                    if (arr[0] === key) {
                        return arr[1]
                    }
                }
            }
        }
        return undefined
    }

    keys() {
        let keys = []
        if (this.keyMap.length === 0) return null
        if (this.keyMap.length === 1) {
            keys.push(this.keyMap[0][0])
        } else {
            for (let arr of this.keyMap) {
                for (let subArr of arr) {
                    keys.push(subArr[0])
                }
            }
        }
        return keys
    }

    // beware of duplicates!
    values() {
        let values = []
        if (this.keyMap.length === 0) return null
        if (this.keyMap.length === 1) {
            keys.push(this.keyMap[0][1])
        } else {
            for (let arr of this.keyMap) {
                for (let subArr of arr) {
                    values.push(subArr[1])
                }
            }
        }
        values = [...new Set(values)]
        // this would also work but longer, so I prefer Set:
        // values = values.filter((item, index) => values.indexOf(item) === index)
        return values
    }
}

let hash1 = new HashTable(3)
hash1.set('red', 'apple')
hash1.set('yellow', 'banana')
hash1.set('green', 'onion')
hash1.set('blue', 'cheese')
hash1.set('white', 'mushrooms')
hash1.set('purple', 'berries')
hash1.set('orange', 'oranges')
hash1.set('black', 'currants')
hash1.set('yellow', 'currants')
hash1.set('red', 'currants')
// console.log(hash1.get('red'))
// console.log(hash1.get('yellow'))
// console.log(hash1.get('green'))
// console.log(hash1.get('blue'))
// console.log(hash1.get('white'))
// console.log(hash1.get('purple'))
// console.log(hash1.get('orange'))
// console.log(hash1.get('black'))
// console.log(hash1.keys())
console.log(hash1.values())
