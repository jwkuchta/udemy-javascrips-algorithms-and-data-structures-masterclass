// Big O of BST:
// insertion - O(log n) average/best case. Worst case is O(n) - in the case of a completely one-sided tree
// searching - O(log n) same as above
// doubling the nodes adds one more step (y = log2(x))

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (current.value === value) return undefined
            if (current.value > value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                } else {
                    current = current.right
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return false
        let current = this.root
        while (true) {
            if (current.value === value) return true, current
            if (current.value > value) {
                if (current.left === null) return false
                current = current.left
            } else {
                if (current.right === null) return false
                current = current.right
            }
        }
    }

    // his solution: 
    find2(value) {
        if (this.root === null) return false
        let current = this.root
        let found = false
        while (!found && current) {
            if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            } else {
                found = true
            }
        }
        if (!found) return false
        return current
    }
}

let tree = new BinarySearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

// console.log(tree)
// console.log(tree.root)

tree.insert(6)
console.log('these should be true')
console.log(tree.find2(10))
console.log(tree.find2(15))
console.log(tree.find2(7))
console.log(tree.find2(9))
console.log('these should be false')
console.log(tree.find2(72))
console.log(tree.find2(90))
console.log(tree.find2(100))