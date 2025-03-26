function depthFirstSearch(graph, currentNode, targetNode, visited = new Set()) {
    if (!(currentNode in graph)) return [];  // Ensure the node exists in the graph

    if (currentNode === targetNode) return [currentNode]; // Base-ish case

    visited.add(currentNode);

    for (let neighbor of graph[currentNode] || []) {
        if (!visited.has(neighbor)) {
            const path = depthFirstSearch(graph, neighbor, targetNode, visited);
            if (path.length > 0) {
                return [currentNode, ...path]; // Look at that, obscure JavaScript things ARE helpful!
            }
        }
    }

    return [];
}
