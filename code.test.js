const jsc = require('jsverify');

function createAdjList(numOfNodes, numOfPairs) {

    // Initilize empty adjList
    adjList = []
    for (i = 0; i < numOfNodes; i++) {
        adjList[i] = []
    }

    // Add pairs of edges to adjList
    for (i = 0; i < numOfPairs; i++) {
        startNode = Math.floor((Math.random()) * numOfNodes);
        endNode = Math.floor((Math.random()) * numOfNodes);

        adjList[startNode].push(endNode);

    }

    // Sort it and get rid of duplicates
    for (i = 0; i < numOfNodes; i++) {
        adjList[i].sort();
        adjList[i] = [...new Set(adjList[i])];
    }

    return adjList;
}






console.log(createAdjList(5, 10));