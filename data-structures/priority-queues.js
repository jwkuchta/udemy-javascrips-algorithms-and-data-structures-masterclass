// PRIORITY QUEUES
// data structure where each element has a priority
// elements with higher priority are served before elements with lower priority (like hospital triage)

// best for insertion and removal but not searching (element could be anywhere, unlike in binary search trees)
class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
        // we could add logic for elements of equal priority
        this.insertTime = Date.now()
    }
}

// it is essentially a Min Binary Heap
class PriorityQueue {
    constructor() {
        this.values = []
    }

    // his solution
    // O(log n)
    enqueue(value, priority) {
        let newNode = new Node(value, priority)
        this.values.push(newNode)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.values.length-1
        const element = this.values[index]
        // so it does not continue swapping when we are at the root
        while (index > 0) {
            let parentIdx = Math.floor((index-1)/2)
            let parent = this.values[parentIdx]
            if (element.priority >= parent.priority) break
            this.values[parentIdx] = element
            this.values[index] = parent
            index = parentIdx
        }
    }

    // extract and swap
    // O(log n)
    dequeue() {
        let min = this.values[0]
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

            if (left < length) {
                leftChild = this.values[left]
            if (leftChild.priority < element.priority) {
                swap = left
            }
        } 
            if (right < length) {
                rightChild = this.values[right]
            if (rightChild.priority < element.priority) {
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = right
                }
            }
        }
        if (swap === null) break
        this.values[index] = this.values[swap] 
        this.values[swap] = element
        index = swap
        }
        return min
    }
}
 
let heap = new PriorityQueue()
heap.enqueue('pay bills', 1)
heap.enqueue('feed cats', 2)
heap.enqueue('buy new house', 4)
heap.enqueue('buy new clothes', 4)
heap.enqueue('brush teeth', 1)
heap.enqueue('breathe', 2)
console.log(heap)
console.log(heap.dequeue())
console.log(heap)
