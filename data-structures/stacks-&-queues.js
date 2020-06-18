// stacks are abstract data collections that needs to abide by the LIFO principle
// it is FIFO for queues

// where stacks are used:
// 1. Managing function invocations
// 2. undo/redo
// 3. routing (history object)

// how to build the best possible stack from scratch

class Stack {
    constructor() {
        this.first = null // like head
        this.last = null // like tail
        this.size = 0
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

    // it adds to the beginning
    push(val) {
        let newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    pop() {
        if (this.size === 0) return null
        let temp = this.first
        if (this.first === this.last) this.last = null
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

// for queues we can use shift() and unshift()
// you can do this with an array but it would be very inefficient so we will write one from scratch

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = o
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

    // we will be adding to the end and removing from the beginning to avoid having to traverse the whole list
    // instead of push(), we will use enqueue(), instead of pop(), we will use dequeue()

    enqueue(val) {
        // adding to the end
        let newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() {
        // removing from the beginning
        if (this.size === 0) return null
        let severedNode = this.first
        if (this.first = this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return severedNode.value
    }
}