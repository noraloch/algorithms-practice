class LinkedList {
    constructor(){
        this.head = null
        this.length = 0
    }


    insertAtHead(data) {
        let newNode = new Node(data, this.head)
        this.head = newNode
        this.length ++
    }

    getByIndex(i) {
        if (i < 0 || i >= this.length) return null
        if (i === 0) return this.head

        let currentNode = this.head
        for (let index = 0 ; index < i; index++) {
            // console.log("index: ", i);
            // console.log("current node: ", currentNode)
            // let n = currentNode.next
            // console.log("next: ", currentNode.next)
            currentNode = currentNode.next
            // console.log("success ?: ", n === currentNode)
        }
        return currentNode
    }

    insertAtIndex(i, data) {
        if (i === 0) return this.insertAtHead(data)

        const prevNode = this.getByIndex(i - 1)

        if (prevNode == null) return null
        
        prevNode.next = new Node(data, prevNode.next)
        this.length ++
    }

    removeHead() {
        this.head = this.head.next
        this.length --
    }

    removeAtIndex(i) {
        if (i === 0) return this.removeHead()

        const prevNode = this.getByIndex(i - 1)

        if (prevNode == null) return null
        
        prevNode.next = prevNode.next.next

        this.length -- 

    }
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

LinkedList.fromValues = function(...values) {
    let linkedList = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        linkedList.insertAtHead(values[i])
    }
    return linkedList
}


module.exports = LinkedList
