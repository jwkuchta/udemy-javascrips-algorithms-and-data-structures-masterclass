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

    shift() {
        if (this.length === 0) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            // this.head = this.head.next
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
            // it worked for Colt but mine needs the following line to sever both connections from the oldHead
            // oldHead.prev = null
        }
        this.length--
        return oldHead
    }

    unshift(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    // we could do it similarly to a singly-linked list but there is a faster way for dounbly-linked list
    get(index) {
        if (index < 0 || index >= this.length) return null
        if (index === 0) return this.head
        if (index === this.length) return this.tail
        let middleIndex = Math.round(this.length / 2)
        let left = this.head
        let right = this.tail
        let count = 0
        if (index <= middleIndex) {
            while (count !== index) {
                left = left.next
                count++
            }
            return left
        } else {
            while (count !== (this.length - index -1)) {
                right = right.prev
                count++
            }
            return right
        }
    }

    print() {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.value)
            current = current.next
        }
        return arr
    }
}


