class Solution {
    maxSlidingWindow(nums: number[], k: number): number[] {
        let res: number[] = [];
        let q: number[] = []; // Salva gli INDICI, con valori in ordine decrescente

        for (let r = 0; r < nums.length; r++) {
            // 1. Rimuovi dalla fine gli indici con valori più piccoli o uguali a nums[r]
            while (q.length > 0 && nums[q[q.length - 1]] <= nums[r]) {
                q.pop();
            }

            // 2. Inserisci l'indice corrente
            q.push(r);

            // 3. Rimuovi dalla testa se l'indice più vecchio è uscito dalla finestra a sinistra
            if (q[0] < r - k + 1) {
                q.shift();
            }

            // 4. Se abbiamo riempito la prima finestra da k elementi, prendi il massimo in cima
            if (r >= k - 1) {
                res.push(nums[q[0]]);
            }
        }

        return res;
    }
}