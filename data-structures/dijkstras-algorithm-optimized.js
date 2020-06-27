// PriorityQueue copied from priority-queues.js

class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
        // we could add logic for elements of equal priority
        this.insertTime = Date.now()
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
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

class WeightedGraph {
    constructor() {
        this.adjacencyList = []
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }

    // optimized version
    DijkstrasAlgo = (start, finish) => {
        const nodes = new PriorityQueue()
        const distance = {}
        const previous = {}
        let path = []
        for (let key in this.adjacencyList) {
            if (key === start) {
                distance[key] = 0
                nodes.enqueue(key, 0)
            } else {
                distance[key] = Infinity
                nodes.enqueue(key, Infinity)
            }
            previous[key] = null
        }
        let current
        while (nodes.values.length) {
            current = nodes.dequeue().val
            if (current === finish) {
                while (previous[current]) {
                    path.push(current)
                    current = previous[current]
                }
                break
            }
            if (current || distance[current] !==Infinity) {
                for (let neighbor of this.adjacencyList[current]) {
                    let candidate = distance[current] + neighbor.weight
                    let nextNeighbor = neighbor.node
                    if (candidate < distance[nextNeighbor]) {
                        distance[nextNeighbor] = candidate
                        previous[nextNeighbor] = current
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
            
        }
        return path.concat(current).reverse()
    }
    
}

let g = new WeightedGraph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 4)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'E', 3)
g.addEdge('C', 'D', 2)
g.addEdge('C', 'F', 4)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 1)
g.addEdge('E', 'F', 1)

console.log(g.DijkstrasAlgo("A", "E"))