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
})
describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const linkedList = LinkedList.fromValues(5, 9)

            expect(linkedList.getByIndex(-3)).toBeNull()
        });
    });

    describe('with middle index', () => {
        test('it returns the element at the specific index ', () => {
            const linkedList = LinkedList.fromValues(1, 2, 5, 9, 7, 4, 3)

            expect(linkedList.getByIndex(4).value).toBe(7)

        })

    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const linkedList = LinkedList.fromValues(5, 9, 7, 4, 3)

            expect(linkedList.getByIndex(0).value).toBe(5)

        })

    })

    describe('with index greather than length', () => {
        test('it returns null', () => {
            const linkedList = LinkedList.fromValues(5, 9)

            expect(linkedList.getByIndex(2)).toBe(null)

        })

    })

});

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not insert anything', () => {
            const linkedList = LinkedList.fromValues(5, 9)

            linkedList.insertAtIndex(-3, 8)
            expect(linkedList.length).toBe(2)
        });
    });

    describe('with middle index', () => {
        test('it inserts element at that index', () => {
            const linkedList = LinkedList.fromValues(1, 2, 5, 9)

            linkedList.insertAtIndex(2, 8)
            expect(linkedList.getByIndex(2).value).toBe(8)
            expect(linkedList.getByIndex(2).next.value).toBe(5)
            expect(linkedList.length).toBe(5)
        })

    })

    describe('with index 0', () => {
        test('it inserts at head', () => {
            const linkedList = LinkedList.fromValues(5, 9, 7, 4, 3)
            linkedList.insertAtIndex(0, 4)

            expect(linkedList.head.value).toBe(4)
            expect(linkedList.length).toBe(6)
        })
    })

    describe('with index greather than length', () => {
        test('it does not insert anything', () => {
            const linkedList = LinkedList.fromValues(5, 9)
            linkedList.insertAtIndex(3, 7)

            expect(linkedList.length).toBe(2)
        })
    })


});

describe('#removeAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not remove anything', () => {
            const linkedList = LinkedList.fromValues(5, 9)
            linkedList.removeAtIndex(-1)

            expect(linkedList.length).toBe(2)
        });
    })


    describe('with middle index', () => {
        test('it removes the node at that index', () => {
            const linkedList = LinkedList.fromValues(1, 2, 5, 9)

            linkedList.removeAtIndex(2)
            expect(linkedList.getByIndex(2).value).toBe(9)
            expect(linkedList.getByIndex(2).next).toBeNull
            expect(linkedList.length).toBe(3)
        })

    })

    describe('with index 0', () => {
        test('it removes the head', () => {
            const linkedList = LinkedList.fromValues(5, 9, 7, 4, 3)
            linkedList.removeAtIndex(0)

            expect(linkedList.head.value).toBe(9)
            expect(linkedList.head.next.value).toBe(7)
            expect(linkedList.length).toBe(4)
        })
    })

    describe('with index greather than length', () => {
        test('it does not remove anything', () => {
            const linkedList = LinkedList.fromValues(5, 9)
            linkedList.removeAtIndex(3)

            expect(linkedList.length).toBe(2)
        })
    })
    
});

describe('#removeHead', () => {
    test('it removes the first node', () => {
        const linkedList = LinkedList.fromValues(5, 9, 8)
        linkedList.removeHead()

        expect(linkedList.head.value).toBe(9)
        expect(linkedList.head.next.value).toBe(8)
        expect(linkedList.length).toBe(2)
    });
});



