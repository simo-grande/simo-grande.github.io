/*eslint-disable */
class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
    }
}

const abeLL = new TreeNode('Abe');
const homerLL = new TreeNode('Homer');
const bartLL = new TreeNode('Bart');
const lisaLL = new TreeNode('Lisa');
const maggieLL = new TreeNode('Maggie');

abeLL.descendents = homerLL
homerLL.descendents = bartLL
bartLL.descendents = lisaLL
lisaLL.descendents = maggieLL
maggieLL.descendents = null


function findLLName(list, name) {

    if (list.value === name) return list;

    if (list.descendents === null) {
        return null
    } else {
        return findLLName(list.descendents, name)
    }

}

console.log(findLLName(abeLL, "Homer"))
