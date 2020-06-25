// used in any social networks, recommendations engines, maps

// vertex - basically a node
// edge - the connection

// types of graphs
// undirected vs directed
// undirected graph - no direction or polarity to the edges
// like Facebook friendships that are bilateral

// directed graph - where the edge has a unilateral direction or a bilateral connection
// like following on Instagram, does not have to be mutual by default

// weighted vs unweighted graph - edges are given weight, impotance

// how to store graphs?
// adjacency matrix and - rows and columns
// adjacency list - using an array or a list to store edges. We could also use a hash table

// we will be using ADJACENCY LIST

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    // we first add an unconnected vertex
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    // to add edge we need to specify two vertises
    addEdge(vertex1, vetex2) {
        if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2)
        if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1)
    }

    // removes two pieces of data, cause the connection is stored in two places
    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) return this
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
        return this
    }
}

let g = new Graph()

console.log(g.addVertex('cats'))
g.adjacencyList['cats'].push('wallace')
console.log(g)