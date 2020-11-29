function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let node = head;
    let carry = 0;
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = sum / 10 | 0;
        node.next = new ListNode(sum % 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        node = node.next;
    }
    console.log(head)
    return head.next;
};

console.log(addTwoNumbers([2,4,3], [5,6,4]));