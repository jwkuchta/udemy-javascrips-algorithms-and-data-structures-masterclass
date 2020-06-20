// 4 approaches
// 2 main ones:
// breadth-first search and depth-first search

// BFS

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class SearchTree {
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

    // visit siblings before children
    BFS() {
        let queue = []
        let searched = []
        let current = this.root
        queue.push(this.root)
        while (queue.length) {
            current = queue.shift()
            searched.push(current.value)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return searched
    }

    // visit children before siblings
    // result allows you to reconstruct the tree from the array
    DFSpreorder() {
        let visited = []
        // optional
        let current = this.root

        const traverse = node => {
            visited.push(node.value)
            // this order is significant
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(current)
        return visited
    }

    // we traverse the tree first, then we visit the nodes
    // go all the way down and start there
    // root will be the last person to visit
    DFSpostorder() {
        let visited = []
        let current = this.root
        
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value)
        }

        traverse(current)
        return visited
    }

    // traverse left, then visit the node, then traverse the right and visit those nodes
    // result goes from lowest to highest
    DFSinOrder() {
        let visited = []
        let current = this.root

        const traverse = node => {
            if (node.left) traverse(node.left)
            visited.push(node.value)
            if (node.right) traverse(node.right)
        }

        traverse(current)
        return visited
    }

}

let tree = new SearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

// console.log(tree)

console.log('preorder: ', tree.DFSpreorder())
console.log('postorder: ', tree.DFSpostorder())
console.log('inorder: ', tree.DFSinOrder())

// when to use which
// BFS vs DFS - depends on a tree
// time complexity is the same but space complexity is larger for BDS because of the queue
