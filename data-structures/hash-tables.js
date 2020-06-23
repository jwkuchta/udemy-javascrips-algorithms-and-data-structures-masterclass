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
    
    get(key) {
        let index = this._hash(key)
        // console.log(index)
        if (this.keyMap[index]) {
            if (this.keyMap[index].length === 1) {
                console.log(this.keyMap[index])
                return this.keyMap[index][1]
            } else {
                for (let i = 0; i < this.keyMap[index].length; i++) {
                    console.log(i)
                    if (this.keyMap[index][i][0] === key) {
                        return this.keyMap[index][i]
                    }
                }
            }
            // return sthis.keyMap[index][1]
        }
        return undefined
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
console.log(hash1.get('red'))
console.log(hash1.get('yellow'))
console.log(hash1.get('green'))
console.log(hash1.get('blue'))
console.log(hash1.get('white'))
console.log(hash1.get('purple'))
console.log(hash1.get('orange'))
console.log(hash1.get('black'))
