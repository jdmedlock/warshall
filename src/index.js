const warshall = require('./warshall.js');

// Create a new dependency object
let deps = new warshall(3);

// Test #1 - No cycle
deps.addDependency(0,1);      // Node 0 is waiting on node 1
deps.addDependency(2,0);      // Node 2 is waiting on node 0
deps.printDependencyArray('Test #1 after adding dependencies...');
deps.identifyDependencies();
deps.printDependencyArray('Test #1 after identifying dependencies...');

// Test #2 - Create a simple dependency between two adjacent nodes
deps.clearDependencyArray();
deps.addDependency(0,1);      // Node 0 is waiting on node 1
deps.addDependency(1,0);      // Node 1 is waiting on node 2
deps.printDependencyArray('Test #2 after adding dependencies...');
deps.identifyDependencies();
deps.printDependencyArray('Test #2 after identifying dependencies...');

// Test #3 - Establish a transitive cycle
deps.clearDependencyArray();
deps.addDependency(0,1);      // Node 0 is waiting on node 1
deps.addDependency(1,2);      // Node 1 is waiting on node 2
deps.addDependency(2,0);      // Node 2 is waiting on node 0
deps.printDependencyArray('Test #3 after adding dependencies...');
deps.identifyDependencies();
deps.printDependencyArray('Test #3 after identifying dependencies...');
