const warshall = require('./warshall.js');

let deps = new warshall(3);

deps.addDependency(0,1);      // Node 0 is waiting on node 1
deps.addDependency(1,2);      // Node 1 is waiting on node 2
deps.addDependency(2,0);      // Node 2 is waiting on node 0
deps.printDependencyArray('After adding dependencies...');
deps.identifyDependencies();
deps.printDependencyArray('After identifying dependencies...');

deps.clearDependencyArray();
deps.printDependencyArray('After clearing...');
deps.addDependency(0,1);      // Node 0 is waiting on node 1
deps.addDependency(2,0);      // Node 2 is waiting on node 0
deps.printDependencyArray('After adding dependencies...');
deps.identifyDependencies();
deps.printDependencyArray('After identifying dependencies...');