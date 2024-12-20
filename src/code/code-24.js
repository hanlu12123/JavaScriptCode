class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution_24_SwapNodesInPairs {
  swapPairs(head) {
    const dummy = new ListNode();
    dummy.next = head;
    this.swapSinglePairs(dummy);
    return dummy.next;
  }

  swapSinglePairs(head) {
    if (!head) {
      return;
    }

    const curr = head.next;
    const seco = curr ? curr.next : null;
    if (!curr || !seco) {
      return;
    }

    const next = seco.next;
    head.next = seco;
    seco.next = curr;
    curr.next = next;
    // head -> curr -> seco -> next
    // head -> seco -> curr -> next
    this.swapSinglePairs(curr);
  }
}
