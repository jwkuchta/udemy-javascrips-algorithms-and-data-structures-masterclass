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

    // his solution
    insert2(element) {
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length-1
        const element = this.values[idx]
        // so it does not continue swapping when we are at the root
        while (index > 0) {
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.values[parentIdx]
            if (element <= parent) break
            this.values[parentIdx] = element
            this.values[index] = parent
            idx = parentIdx
        }
    }

    // extract and swap
    extractMax() {
        let max = this.values[0]
        let last = this.values.pop()
        this.values[0] = last
        let index = 0
        let length = this.values.length
        while (true) {
            let element = this.values[0]
            let left = 2 * index + 1
            let right = 2 * index + 2
            let leftChild, rightChild
            let swap = null

            // first check if there is an element at that index
            if (left < length) {
                leftChild = this.values[left]
                if (leftChild > element) {
                    swap = left
                }
            } 
            if (right < length) {
                rightChild = this.values[right]
                if (rightChild > element) {
                    if ((swap === null && rightChild > element) ||
                        (swap !== null && rightChild > leftChild)) {
                        swap = right
                    }
                }
            }
            if (swap === null) break
            this.values[index] = this.values[swap] 
            this.values[swap] = element
            index = swap
        }
        return max
    }

}

let max = new MaxBinaryHeap()
let max2 = new MaxBinaryHeap()
let heap = new MaxBinaryHeap()

max.values.push(90, 80, 70, 65, 64, 50, 49)
max2.values.push(41, 39, 33, 18, 27, 12)
heap.values.push(70, 67, 65, 45, 58, 40, 53, 44, 15, 31)


// console.log(max)
max.insert(81)
// max2.insert(55)
// console.log('max before extraxtMax', max)
// console.log(heap)
// heap.extractMax()
// console.log(heap)
// console.log(max)
heap.extractMax()




