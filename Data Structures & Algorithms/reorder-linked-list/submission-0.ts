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
    reorderList(head: ListNode | null): void {
        if (!head || !head.next) return;

        // 1. Trova il centro esatto
        let slow: ListNode | null = head;
        let fast: ListNode | null = head.next;

        while (fast !== null && fast.next !== null) {
            slow = slow!.next;
            fast = fast.next.next;
        }

        // 2. Separa e inverti la seconda metà
        let second: ListNode | null = slow!.next;
        slow!.next = null; // Taglia il ponte con la prima metà

        let prev: ListNode | null = null;
        while (second !== null) {
            let tmp: ListNode | null = second.next;
            second.next = prev;
            prev = second;
            second = tmp;
        }

        // 3. Unione a cerniera: first (testa originale) e second (ora è in prev)
        let first: ListNode | null = head;
        second = prev;

        while (second !== null) {
            let tmp1: ListNode | null = first!.next;
            let tmp2: ListNode | null = second.next;

            first!.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
        }
    }
}
