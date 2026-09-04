class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length)
            return false

        let l = 0
        let slidingWindow: Map<string, number> = new Map()
        let compareLetters: Map<string, number> = new Map()

        for(let i = 0; i < s1.length; i++)
            compareLetters.set(s1[i], (compareLetters.get(s1[i]) ?? 0) + 1)

        for(let r = 0; r < s2.length; r++){
            slidingWindow.set(s2[r], (slidingWindow.get(s2[r]) ?? 0) + 1)
            let res = true
            if(r - l +1 == s1.length){
                for(const [k, v] of compareLetters){
                    if(slidingWindow.get(k) != v)
                        res = false
                }
                if(!res){
                    if(slidingWindow.get(s2[l]) > 1)
                        slidingWindow.set(s2[l], slidingWindow.get(s2[l]) - 1) 
                    else
                        slidingWindow.delete(s2[l])
                    l++
                } else{
                    return true
                }
            }
        }

        return false
    }
}
