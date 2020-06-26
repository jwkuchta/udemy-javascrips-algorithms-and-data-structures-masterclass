// shortest path algorithm that acts upon a graph and uses a priority queue (naive and then binary heap)
// we will first need to implement a weighted graph

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
}

let g = new WeightedGraph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B', 5)
g.addEdge('A', 'C', 8)
g.addEdge('B', 'D', 10)
g.addEdge('C', 'E', 1)
g.addEdge('D', 'E', 3)
g.addEdge('D', 'F', 7)
g.addEdge('E', 'F', 5)

console.log(g.adjacencyList)

// HOW DIJKSTRA'S ALGORITHM WORKS
// 1. We start with a node and every time we visit a new node,
// we pick a node with the smallest known distance to visit first
// 2. Once we've moved to the node we're going to visit, we look at each of its neighbors
// 3. For each neighbor node we calculate the distance by summing total edges 
// that lead to the node we're checking from the starting node
// 4. If the new total distance to a node is less than the previous total, 
// we store the new total distance for that node
