// a link list consists of a bunch of elements that just points to the next element
// we cannot access items by index. It consists of nodes, and each node has a value and a pointer
// It contains a head, length, and a tail. It's like a skyscraper without an elevator
// each node is connected to the next node unidirectionally
// random access is not allowed but they are very good at insertion or deletion - no need for re-indexing

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
            // take the tail and add on to the end
            this.tail.next = this.tail
            // move the tail one spot over
            this.tail = node
        }
        this.length++
        return this
    }
}

let list = new SinglyLinkedList()
list.push('hi')
console.log(list.first, list.head, list.tail)
list.push('there')
console.log(list, list.tail)