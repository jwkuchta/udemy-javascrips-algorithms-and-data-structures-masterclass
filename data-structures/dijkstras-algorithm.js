// shortest path algorithm that acts upon a graph and uses a priority queue (naive and then binary heap)
// we will first need to implement a weighted graph

// NAIVE IMPLEMENTATION OF THE PRIORITY QUEUE

// not the best way to do it because we are sorting every time which is O(n * log n)
class NaivePriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        this.values.push({val, priority})
        this.sort()
    }

    dequeue() {
        return this.values.shift()
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

let q = new NaivePriorityQueue()
q.enqueue("A", 2)
q.enqueue("B", 1)
q.enqueue("C", 7)
q.enqueue("D", 5)
q.enqueue("E", 9)
q.enqueue("F", 3)

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

    // this is an unoptimized version
    // if will be faster with a binary heap
    DijkstrasAlgo = (start, finish) => {
        const nodes = new NaivePriorityQueue()
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
            // gives us the vertex with the lowest priority
            current = nodes.dequeue().val
            if (current === finish) {
                // build a path to return at the end
                while (previous[current]) {
                    path.push(current)
                    current = previous[current]
                }
                // we have to break out cause there might still be nodes 
                break
            }
            if (current || distance[current] !==Infinity) {
                // find neighboring node
                for (let neighbor of this.adjacencyList[current]) {
                    // calculate distance to neighbor
                    let candidate = distance[current] + neighbor.weight
                    // check if candidate is smaller than what we currently have stored for the neighbor
                    let nextNeighbor = neighbor.node
                    // if (D to E < current distance to E)
                    if (candidate < distance[nextNeighbor]) {
                        // updates new shortest distance to neighbor
                        distance[nextNeighbor] = candidate
                        // updates how we got to the next neighbor
                        previous[nextNeighbor] = current
                        // enqueue priority queue with new priority
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

// HOW DIJKSTRA'S ALGORITHM WORKS
// 1. We start with a node and every time we visit a new node,
// we pick a node with the smallest known distance to visit first
// 2. Once we've moved to the node we're going to visit, we look at each of its neighbors
// 3. For each neighbor node we calculate the distance by summing total edges 
// that lead to the node we're checking from the starting node
// 4. If the new total distance to a node is less than the previous total, 
// we store the new total distance for that node





