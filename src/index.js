const warshall = require('./warshall.js');

let deps = new warshall(3);

// Test #1 - Contains trasitive cycle
deps.addDependency(0,1);      // Node 0 is waiting on node 1
deps.addDependency(1,2);      // Node 1 is waiting on node 2
deps.addDependency(2,0);      // Node 2 is waiting on node 0
deps.printDependencyArray('After adding dependencies...');
deps.identifyDependencies();
deps.printDependencyArray('After identifying dependencies...');

// Test #2 - No cycle
deps.clearDependencyArray();
deps.printDependencyArray('After clearing...');
deps.addDependency(0,1);      // Node 0 is waiting on node 1
deps.addDependency(2,0);      // Node 2 is waiting on node 0
deps.printDependencyArray('After adding dependencies...');
deps.identifyDependencies();
deps.printDependencyArray('After identifying dependencies...');