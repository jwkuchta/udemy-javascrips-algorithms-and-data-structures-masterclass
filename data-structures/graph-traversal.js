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
                if (!visited[node]){
                    DFS(node)
                } 
            }
        }
        DFS(vertex)
        return results
    }

    // his solution
    depthFirstRecursive(start) {
        const result = []
        const visited = {}
        // because of the "this" inside the helper function
        const adjacencyList = this.adjacencyList

        function dfs(vertex){
            if (!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        }
        dfs(start)
        return result
    }

    // my solution
    DFSiterative(vertex) {
        const stack = []
        const result = []
        const visited = {}

        // so our while loop condition is true at the beginning
        stack.push(vertex)
        // visited[vertex] = true

        while(stack.length) {
            let next = stack.pop()
            if (!visited[next]) {
                visited[next] = true
                result.push(next)
                stack.push(...this.adjacencyList[next])
            }
        }
        return result
    }

    // his solution
    depthFirstIterative(start) {
        const stack = [start]
        const result = []
        const visited = {}
        // to avoid re-initializing the currentVertex inside the loop
        let currentVertex

        visited[start] = true
        while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    // visit all neighbors before neighbor's neighbors
    // my solution
    BFS(vertex) {
        const queue = [vertex]
        const result = []
        const visited = {}
        let first

        while (queue.length) {
            first = queue.shift()

            if (!visited[first]) {
                visited[first] = true
                result.push(first)
                queue.push(...this.adjacencyList[first])
            }
        }
        return result
    }

    // his solution
    breadthFirst(start) {
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex

        visited[start] = true

        while (queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
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
// console.log(g.DFSrecursive("F"))
// console.log(g.depthFirstRecursive("F"))
// console.log(g.DFSiterative("A"))
// console.log(g.depthFirstIterative("A"))

console.log(g.BFS("A"))
console.log(g.breadthFirst("A"))