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
        // we will not worry about duplicates for now
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
}

let g = new Graph()

console.log(g.addVertex('cats'))
g.adjacencyList['cats'].push('wallace')
console.log(g)