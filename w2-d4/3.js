/*eslint-disable */
class TreeNode {
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


function valueExist (tree, name) {
 
    if(tree.value === name) 
    return tree;
    
    let found=null;
    for (let i of tree.descendents) {
    
    found = valueExist (i, name)
    if(found) 
    return found;
    }
    
    return found;
    
   }
    
   console.log(valueExist(abe, "Lisa"))