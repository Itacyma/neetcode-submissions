class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0
        let l = 0
        let slidingWindow: Set<string> = new Set()

        for(let r = 0; r < s.length; r++){
            while(slidingWindow.has(s[r])){
                slidingWindow.delete(s[l])
                l++
            }
            slidingWindow.add(s[r])
            if(slidingWindow.size > max)
                max = slidingWindow.size
        }

        return max
    }
}
