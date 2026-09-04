class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let occorrenze: Map<string, number> = new Map()
        let l = 0
        let max = 0
        let maxFreq = 0

        for(let r = 0; r < s.length; r++){
            occorrenze.set(s[r], occorrenze.has(s[r])? occorrenze.get(s[r])+1 : 1)
            if(occorrenze.get(s[r]) > maxFreq)
                maxFreq = occorrenze.get(s[r])

            while(r - l + 1 - maxFreq > k){
                if(occorrenze.get(s[l]) > 1)
                    occorrenze.set(s[l], occorrenze.get(s[l]) -1)
                else
                    occorrenze.delete(s[l])
                
                l++
            }
            max = Math.max(max, r - l + 1);
        }

        return max


    }
}
