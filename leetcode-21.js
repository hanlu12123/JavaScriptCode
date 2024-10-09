class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    mergeTwoLists(list1, list2) {
        if (!list1) {
            return list2;
        }

        if (!list2) {
            return list1;
        }

        if (list1.val <= list2.val) {
            list1.next = this.mergeTwoLists(list1.next, list2);
            return list1;
        } else {
            list2.next = this.mergeTwoLists(list1, list2.next);
            return list2;
        }
    }


  // mergeTwoLists(list1, list2) {
  //       if (!list1) {
  //           return list2;
  //       }
  //       if (!list2) {
  //           return list1;
  //       }
  //       let head = new ListNode();
  //       let curr = head;
  //       while (list1 && list2) {
  //           if (list1.val <= list2.val) {
  //               curr.next = list1;
  //               list1 = list1.next;
  //               curr = curr.next;
  //           } else {
  //               curr.next = list2;
  //               list2 = list2.next;
  //               curr = curr.next;
  //           }
  //       }
  //       if (list1) {
  //           curr.next = list1;
  //       } else if (list2) {
  //           curr.next = list2;
  //       }
  //       return head.next;
  // }
}


