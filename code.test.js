// Setup Code to copy and paste
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

// Manually create tests. Not ideal but I can't figure out prooperty based testing


// ----- Small Test ----- //

// Empty Graph
assert.deepStrictEqual(depthFirstSearch([], 0, 0), []);
assert.deepStrictEqual(depthFirstSearch([], 0, 1), []);
assert.deepStrictEqual(depthFirstSearch([], 1, 0), []);

// Single Node
assert.deepStrictEqual(depthFirstSearch([0], 0, 0), [0]);
assert.deepStrictEqual(depthFirstSearch([0], 0, 1), []);
assert.deepStrictEqual(depthFirstSearch([0], 1, 0), []);

// Double Node - Not Connected
assert.deepStrictEqual(depthFirstSearch([[0], []], 0, 0), [0]);
assert.deepStrictEqual(depthFirstSearch([[0], []], 0, 1), []);
assert.deepStrictEqual(depthFirstSearch([[0], []], 1, 0), []);

// Double Node - Connected
assert.deepStrictEqual(depthFirstSearch([[1], [0]], 0, 0), [0]);
assert.deepStrictEqual(depthFirstSearch([[1], [0]], 0, 1), [0, 1]);
assert.deepStrictEqual(depthFirstSearch([[1], [0]], 1, 0), [1, 0]);




// ----- Large Tests ----- //

graph = [[1, 2, 3], [2], [3], []];
assert.deepStrictEqual(depthFirstSearch(graph, 0, 3), [0, 1, 2, 3]);
assert.deepStrictEqual(depthFirstSearch(graph, 0, 0), [0]);
assert.deepStrictEqual(depthFirstSearch(graph, 3, 0), []);

graph = [[3], [], [0, 5], [], [], [1]];
assert.deepStrictEqual(depthFirstSearch(graph, 3, 0), []);
assert.deepStrictEqual(depthFirstSearch(graph, 0, 3), [0, 3]);
assert.deepStrictEqual(depthFirstSearch(graph, 4, 0), []);
assert.deepStrictEqual(depthFirstSearch(graph, 4, 1), []);
assert.deepStrictEqual(depthFirstSearch(graph, 4, 2), []);
assert.deepStrictEqual(depthFirstSearch(graph, 4, 3), []);
assert.deepStrictEqual(depthFirstSearch(graph, 4, 4), [4]);
assert.deepStrictEqual(depthFirstSearch(graph, 4, 5), []);
assert.deepStrictEqual(depthFirstSearch(graph, 2, 0), [2, 0]);
assert.deepStrictEqual(depthFirstSearch(graph, 2, 3), [2, 0, 3]);
assert.deepStrictEqual(depthFirstSearch(graph, 3, 2), []);
assert.deepStrictEqual(depthFirstSearch(graph, 3, 5), []);

graph = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]];
assert.deepStrictEqual(depthFirstSearch(graph, 1, 1), [1]);
assert.deepStrictEqual(depthFirstSearch(graph, 1, 2), [1, 0, 2]);
assert.deepStrictEqual(depthFirstSearch(graph, 1, 3), [1, 0, 2, 3]);
assert.deepStrictEqual(depthFirstSearch(graph, 1, 4), [1, 0, 2, 3, 4]);
assert.deepStrictEqual(depthFirstSearch(graph, 1, 5), [1, 0, 2, 3, 4, 5]);
assert.deepStrictEqual(depthFirstSearch(graph, 2, 1), [2, 0, 1]);
assert.deepStrictEqual(depthFirstSearch(graph, 3, 1), [3, 0, 1]);
assert.deepStrictEqual(depthFirstSearch(graph, 4, 1), [4, 0, 1]);
assert.deepStrictEqual(depthFirstSearch(graph, 5, 1), [5, 0, 1]);
assert.deepStrictEqual(depthFirstSearch(graph, 3, 6), []);
assert.deepStrictEqual(depthFirstSearch(graph, 6, 3), []);