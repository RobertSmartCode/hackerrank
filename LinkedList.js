class Node {
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    
    constructor(data, next=null){
        this.head=null;
        this.size=0;
    }

    // Insert first Node
    insertFirst(data){
        this.head= new Node(data, this.head)
    }
    // Insert last Node
    // Insert at index
    // Get at index
    // Remove at index
    // Clear List
    // Print List Data
}
const ll= new LinkedList()

ll.insertFirst(200)
ll.insertFirst(100)

console.log(ll);


