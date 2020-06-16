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
}


