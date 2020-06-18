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

    set(index, value) {
        let nodeAtIndex = this.get(index)
        if (!nodeAtIndex) {
            return false
        } else {
            nodeAtIndex.value = value
            return true
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(value)
        if (index === 0) return !!this.unshift(value)

        let newNode = new Node(value)
        let before = this.get(index-1)
        let after = this.get(index)

        before.next = newNode, newNode.prev = before
        newNode.next = after, after.prev = newNode
        this.length++
        return true
    }

    remove(index) {
        // check if index valid
        if (index < 0 || index > this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()

        // find the node to remove and the node before it and after it
        let before = this.get(index-1)
        let node = this.get(index)
        let after = this.get(index+1)
        // establish new connections skipping the node to be removed
        before.next = after.prev, after.next = before.prev
        // sever nodes connections just to be sure
        node.next = null, node.prev = null
        this.length--
        return node
    }

    reverse() {
        if (this.head === null) return null
        
        let currentNode = this.head
        this.tail = currentNode
      
        while (currentNode !== null) {
            let prev = currentNode.prev
            currentNode.prev = currentNode.next
            currentNode.next = prev
      
            if (currentNode.prev) {
                currentNode = currentNode.prev
            } else {
                this.head = currentNode
                break
            }
        }
        return this
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


