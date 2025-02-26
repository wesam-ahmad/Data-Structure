class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let x = this.head;
        while (x.next) {
            x = x.next;
        }
        x.next = newNode;
    }

    deleteNode(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let y = this.head;
        while (y.next && y.next.data !== data) {
            y= y.next;
        }

        if (y.next) {
            y.next = y.next.next;
        }
    }

    printList() {
        let x = this.head;
        let result = "";
        while (x) {
            result += x.data + " -> ";
            x = x.next;
        }
        console.log(result + "null");
    }
}


const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.deleteNode(20);
list.printList(); 
