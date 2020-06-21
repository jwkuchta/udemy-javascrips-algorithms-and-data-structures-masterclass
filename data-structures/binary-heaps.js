// heaps are trees with special considerations
// there are several types, and we will focus on binary trees (min and max heaps)
// in a max binary tree all children are smaller than the parent, it is the opposite with min binary tree
// used in priority queues and graph traversal

// write code modeling how nodes are filled in
// we can use an array to store a binary heap

// we will store the nodes in an array and reconstruct the structure according to the position in the array
// we add a node to the end and then it bubbles up till it finds its place
// we compare it to the parent and swap, we compare again until the largest num is the root
class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    // my solution
    insert(value) {
        this.values.push(value)
        let index = this.values.length -1 
        let parentIndex = Math.floor((index-1)/2)

        while (this.values[index] > this.values[parentIndex]) {
            let temp = this.values[index]
            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = temp
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
        return this
    }
}

let max = new MaxBinaryHeap()

max.values.push(90, 80, 70, 65, 64, 50, 49)

// console.log(max)
console.log(max.insert(81))

// console.log(max)