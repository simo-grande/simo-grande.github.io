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


function contains(node, target) {
    if (node.value === null) {
        if (node.value === target) {
            return true;
        } else {
            return false;
        }
    } else {
        let childResult = false;
        if (node.value === target) {
            return true;
        }


        for (let child of node.descendents) {
            childResult = contains(child, target);
            if (childResult === true) {
                return true;
            }
        }
        return childResult;
    }
}
console.log("testing Lisa, should be true: ", contains(abe, "Lisa"));