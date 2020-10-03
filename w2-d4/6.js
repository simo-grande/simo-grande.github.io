/*eslint-disable */
function treeModifier(treeNode, modFunc){
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
        return undefined;
    } else {  //loop through the array of descendents and recursively call treeModifier
      for (const node of treeNode.descendents) {
          treeModifier(node, modFunc);
      }
    }
}

let a = [];
let b = [];
console.log( a === b);



/**
 * 
 * @param {Object} node from simpson tree
 * @returns {undefine}
 * changes the node value to have ***    ***
 */
function starFunction(node){
    node.value = "***" + node.value + "***";
    return undefined;
}

/**
 * 
 * @param {Object} node from simpson tree
 * @returns {undefine}
 * changes the node value to be upper case
 */
function caps(node){
    node.value = node.value.toUpperCase();
}

/**
 * 
 */
class TreeNode {
    /**
     * 
     * @param {string} value is name for simpson character
     */
    constructor(value) {
    this.value = value;
    this.descendents = [];
    }
    }
    // create nodes with values
    const abe = new TreeNode('Abe');
    const homer = new TreeNode('Homer');
    const bart = new TreeNode('Bart');
    const lisa = new TreeNode('Lisa');
    const maggie = new TreeNode('Maggie');
    // associate root with is descendents
    abe.descendents.push(homer);
    homer.descendents.push(bart, lisa, maggie);

    console.log(treeModifier(abe, caps));
    console.log('now tree has stars', abe);

