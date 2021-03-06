// a link list consists of a bunch of elements that just points to the next element
// we cannot access items by index. It consists of nodes, and each node has a value and a pointer
// It contains a head, length, and a tail. It's like a skyscraper without an elevator
// each node is connected to the next node unidirectionally
// random access is not allowed but they are very good at insertion or deletion - no need for re-indexing

const { isArray } = require("util")

// 
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// let first = new Node('Hi')
// first.next = new Node('how')
// first.next.next = new Node('are')
// first.next.next.next = new Node('you')
// console.log(first)

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            // take the tail and add on to the end (so we have a connection!)
            this.tail.next = node
            // move the tail one spot over
            this.tail = node
        }
        this.length++
        return this
    }

    pop() {
        // remove tail and assign a new tail which means going through the whole lists (we do not have a tail.previous)
        // we need to find second to last item and make that the tail. We need to traverse the list.
        // if the list is empty return undefined
        if (!this.head) return undefined

        let current = this.head
        let newTail

        while (current.next) {
            newTail = current
            current = current.next   
        }
        this.tail = newTail
        // we need to writing to sever the arrow, so it no longer points to anything
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        } 
        return current
    }

    shift() {
        if (this.length === 0) return undefined
        let severedHead = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) this.tail = null
        return severedHead
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            // this way fails to connect the head to next, why?
            // this.head.next = this.head
            // this.head = newNode
            // his way:
            newNode.next = this.head
            this.head = newNode
        } 
        this.length++
        return this
    }

    // takes a number (n) and returns an item at that index (we start at 0 and do this.next n-times)
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while (index !== counter) {
            current = current.next
            counter++
        }
        return current
    }

    // accepts a position and an item to update the list at that position. It changes the value at that index!
    set(index, value) {
        // uses get() to see if there is anything at this index
        let nodeAtIndex = this.get(index)
        if (!nodeAtIndex) {
            return false
        } else {
            nodeAtIndex.val = value
            return true
        }
    }

    // like set, but inserts instead of updating the value at index position
    insert(index, value) {
        if (index < 0 || index > this.length) return false
        // adding !! coerces truthy value to true, and we save a few lines of code
        if (index === this.length) return !!this.push(value)
        // unshifts and returns true
        if (index === 0) return !!this.unshift(value)
        let newNode = new Node(value)
        let before = this.get(index-1)
        let after = this.get(index)
        before.next = newNode
        newNode.next = after
        this.length++
        return true
    }

    // takes in an index and removes a value at the index
    remove(index) {
        if (index < 0 || index > this.length) return null
        if (index === this.length - 1) this.pop()
        if (index === 0) this.shift()
        let removed = this.get(index)
        let before = this.get(index-1)
        before.next = removed.next
        this.length--
        return removed
    }
    
    // traverse and reverse, we are redrawing pointers until it is all in reverse order
    reverse() {
        let current = this.head
        this.head = this.tail
        this.tail = current
        // we need it to be null because the tail needs to be null
        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }

    // helper for reverse() to see how it's going
    print() {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        return arr
    }
}

let list = new SinglyLinkedList()
list.push('hi')
// console.log(list.first, list.head, list.tail)
list.push('there')
// console.log(list, list.tail)
list.push('kitty')
list.push('are')
list.push('you')
list.push('hungry')
list.push('today')
// console.log(list.shift())
// console.log(list.pop())
console.log('old head is', list.shift())
console.log(list, 'new head is', list.head)