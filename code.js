function depthFirstSearch(graph, startNode, targetNode) {

    // Generate an array of visited node, defaulted to false
    const visited = new Array;
    for (node in graph.length)
        visited[node] = false;


    // Helper function to do the recursion
    function depthFirstSearch2(currentNode) {
        // Base Case: We found the target node!
        if (currentNode === targetNode) {
            return [currentNode];
        }

        // Mark the current node as visited
        visited[currentNode] = true;


        // Iterate through the neighbors
        for (neighbor of graph[currentNode]) {
            // Go in only if we haven't visisted
            if (!visited[neighbor]) {

                const path = depthFirstSearch2(neighbor);
                if (path.length > 0) {
                    return [currentNode, ...path];
                }

            }

        }

        return [];
    }

    return depthFirstSearch2(startNode);

}

const graph = [
    [1, 2, 3],
    [2],
    [3],
    []
]

console.log(depthFirstSearch(graph, 0, 3));