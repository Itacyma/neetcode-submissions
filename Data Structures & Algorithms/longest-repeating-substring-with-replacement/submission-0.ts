class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let occorrenze: Map<string, number> = new Map()
        let l = 0
        let currentSubs = 0
        let max = 0

        for(let r = 0; r < s.length; r++){
            let bestVal = 0
            let bestKey
            occorrenze.set(s[r], occorrenze.has(s[r])? occorrenze.get(s[r])+1 : 1)
            for (const [k, v] of occorrenze) {
                if (v > bestVal) { 
                    bestVal = v
                    bestKey = k
                }
            }
            while(r - l + 1 - bestVal > k){
                if(occorrenze.get(s[l]) > 1)
                    occorrenze.set(s[l], occorrenze.get(s[l]) -1)
                else
                    occorrenze.delete(s[l])
                for (const [k, v] of occorrenze) {
                    if (v > bestVal) { 
                        bestVal = v
                        bestKey = k
                    }
                }
                l++
            }
            max = Math.max(max, r - l + 1);
        }

        return max


    }
}
