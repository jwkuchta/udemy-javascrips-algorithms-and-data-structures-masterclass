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

    BFS() {
        let queue = []
        let searched = []
        let node = this.root
        queue.push(node)
        while (queue.length > 0) {
            node = queue.shift()
            searched.push(node.value)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        } 
        return searched
    }

}

let tree = new SearchTree()
tree.root = new Node(10)
tree.root.right = new Node(15)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9)

console.log(tree.traverse())
