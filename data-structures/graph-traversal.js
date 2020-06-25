// GRAPH TRAVERSAL USES
// p2p networking
// web crawlers
// finding "closest" matches/recommendations
// finding shortest paths problems: GPS, Solving mazes, AI

// DEPTH FIRST TRAVERSAL - children before siblings

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2)
        if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) return this
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
        return this
    }

    removeVertex(vertex) {
        for (let key in this.adjacencyList) {
            this.adjacencyList[key] = this.adjacencyList[key].filter(el => el !== vertex)
        }
        delete this.adjacencyList[vertex]
        return this
    }

    DFSrecursive(vertex) {
        let results = []
        let visited = {}

        const DFS = v => {
            if (!v) return
            visited[v] = true
            results.push(v)
            for (let node of this.adjacencyList[v]) {
                if (visited[node] !== true) {
                    DFS(node)
                }
            }
            // console.log(results, visited)
        }
        DFS(vertex)
        return results
    }
}

let g = new Graph()

g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')

// console.log(g)
console.log(g.DFSrecursive("A"))