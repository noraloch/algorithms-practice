const LinkedList = require("./LinkedList");

const linkedList = LinkedList.fromValues(5,9,7,4,3)
console.log(linkedList.getByIndex(3).value)

linkedList.insertAtIndex(3, 8)
let n = linkedList.getByIndex(3)
console.log(n.value)
