const LinkedList = require("./LinkedList");

describe('#insertAtHead', () => {
    test('it adds an element to the beginning of the list', () => {
        const linkedList = new LinkedList()
        linkedList.insertAtHead('World')
        oldHead = linkedList.head
        linkedList.insertAtHead('Hello')

        expect(linkedList.head.value).toBe('Hello')
        expect(linkedList.head.next).toBe(oldHead)
        expect(linkedList.length).toBe(2)


    })
    
});
