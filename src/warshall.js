/**
 * Warshall is an implementation of the Floyd-Warshall algorithm. This 
 * implementation determines if a node in the graph is in a cycle with
 * any other node in the graph. It does not identify the other node
 * and the edge weights are all assumed to be equal.
 * 
 * @class Warshall
 */
module.exports = class Warshall {
  /**
   * Creates an instance of Warshall.
   * @param {any} noOfNodes Number of nodes in the graph
   * 
   * @memberOf Warshall
   */
  constructor(noOfNodes) {
    this.noOfNodes = noOfNodes;
    this.dependencies = [];
    this.clearDependencyArray();
  }

  /**
   * Add a dependency relationship between two nodes to the dependencies
   * array. Since we are assumine equal weights for all edges of the graph
   * the weight is set to 1.
   * 
   * @param {any} nodeNo The identifying number of the dependent node
   * @param {any} waitsOnNodeNo The identifying number of the owning node
   * 
   * @memberOf Warshall
   */
  addDependency(nodeNo, waitsOnNodeNo) {
    if (nodeNo >= this.noNodes || waitsOnNodeNo >= this.noNodes) {
      throw `addDependency: Invalid parameter. nodeNo (${nodeNo}) or waitsOnNodeNo (${waitsOnNodeNo}) exceed the max. bounds of the dependency array (${this.noNodes}`;
    }
    this.dependencies[nodeNo][waitsOnNodeNo] = 1;
    //this.dependencies[waitsOnNodeNo][nodeNo] = 1;
  }

  /**
   * Clear the dependency array
   */
  clearDependencyArray() {
    for (let i = 0; i < this.noOfNodes; i++) {
      let columns = [];
      for (let j = 0; j < this.noOfNodes; j++) {
        columns[j] = 0;
      }
       this.dependencies[i] = columns;
     }
 }

  /**
   * Identify dependencies between nodes in the graph. On completion the
   * diagonal of the dependencies array will contain a 1 if a node is in
   * a cycle. A value of zero indicates the node is not part of a cycle.
   * 
   * @memberOf Warshall
   */
  identifyDependencies() {
    for (let k = 0; k < this.noOfNodes; k++) {
      for (let i = 0; i < this.noOfNodes; i++) {
        for (let j = 0; j < this.noOfNodes; j++) {
          this.dependencies[i][j] = Math.max(this.dependencies[i][j], this.dependencies[i][k] && this.dependencies[k][j]);
        }
      }
    }
  }

  /**
   * Print the contents of the dependency array to the console log.
   * 
   */
  printDependencyArray(message) {
    console.log(`\nDependency Array - ${message}`);
    for (let i = 0; i< this.noOfNodes; i++) {
      console.log(this.dependencies[i]);
    }
  }
}
