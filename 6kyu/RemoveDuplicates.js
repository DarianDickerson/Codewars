/*
Linked Lists - Remove Duplicates

Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.
*/

function Node(data) {
    this.data = data;
    this.next = null;
}
  
function removeDuplicates(head) {
    if(head == null) return null
    let currNode = head
    
    while(currNode){
      if(currNode.next && currNode.data === currNode.next.data){
        currNode.next = currNode.next.next
        continue
      }
      currNode = currNode.next
    }
    
    return head
}