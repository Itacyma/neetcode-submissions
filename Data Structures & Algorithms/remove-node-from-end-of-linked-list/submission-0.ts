/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        let dummy = new ListNode(0, head);
        let fast: ListNode | null = dummy;
        let slow: ListNode | null = dummy;

        // 1. Sposta fast avanti di n + 1 passi per creare il distacco
        for (let i = 0; i <= n; i++) {
            fast = fast.next;
        }

        // 2. Muovili insieme finché fast non esce dalla lista
        while (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }

        // 3. Salta il nodo bersaglio
        slow!.next = slow.next.next;

        return dummy.next;
    }
}
