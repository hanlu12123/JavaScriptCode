class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution_206_ReverseLinkedList {
  // non-recursion
  reverseList(head) {
    let currentHead = head;
    let pre = null;

    while (currentHead !== null) {
      const next = currentHead.next;
      currentHead.next = pre;
      pre = currentHead;
      currentHead = next;
    }

    return pre;
  }
}
