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

        let currentNode = this.head
        for (let i = 0 ; i < this.length; i++) {
            currentNode = currentNode.next
        }
        return currentNode
    }

    insertAtIndex(i, data) {
        if (index === 0) return this.insertAtHead(data)

        const prevNode = this.getByIndex(i - 1)

        if (prevNode == null) return null
        
        prevNode.next == new LinkedList(data, prevNode.next)
        this.length ++
    }

    removeHead() {
        this.head = this.head.next
        length --
    }

    removeAtIndex(i) {
        if (i === 0) return this.removeHead()

        const prevNode = this.getByIndex(i - 1)

        if (prevNode == null) return null
        
        prevNode.next = prev.next.next

        this.length -- 

    }
}

class Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}


module.exports = LinkedList
