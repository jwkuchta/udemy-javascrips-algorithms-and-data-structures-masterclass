// each node points in two directions
// large ramifications for methods
// more flexibility but also more memory used up (we have two pointers, previous and next)

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        let node = new Node(value)
        if(this.length === 0) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
        return this
    }

    // when you chop off the tail, sever both connections, not just next!
    // if we don't, the popped node will have lingering connections
    pop() {
        if (this.length === 0) return undefined
        let severedTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            // this.tail = severedTail
            this.tail.next = null
            tail.prev = null
            // severedTail = null
        }
        this.length--
        return severedTail
    }

   
}


