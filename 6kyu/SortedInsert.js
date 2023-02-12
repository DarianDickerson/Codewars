/*
Linked Lists - Sorted Insert

Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)

*/

function Node(data) {
    this.data = data;
    this.next = null;
}
  
function sortedInsert(head, data) {
    if(head == null) return new Node(data)
    if(head.data > data){
        let res = new Node(data)
        res.next = head
        return res
      }
    
    let currNode = head
    let tail = true
    
    while(currNode){
      if(currNode.next == null || currNode.next.data > data){
        let insert = new Node(data)
        insert.next = currNode.next
        currNode.next = insert
        break
      }
      
      currNode = currNode.next 
    }
    
    return head
}