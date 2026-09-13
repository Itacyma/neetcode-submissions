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
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode | null {
        let prev: ListNode | null = null;
        let curr: ListNode | null = head;

        while (curr !== null) {
            let nextTemp: ListNode | null = curr.next; // 1. Salva il prossimo
            curr.next = prev;                          // 2. Inverti il puntatore
            prev = curr;                               // 3. Sposta prev in avanti
            curr = nextTemp;                           // 4. Sposta curr in avanti
        }

        return prev; 
    }
}
