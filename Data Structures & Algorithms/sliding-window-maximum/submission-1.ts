class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let res: number[] = []
        let resIndex = 0
        let l = 0
        let currentMax = -Infinity
        for(let r = 0; r < nums.length; r++){
            currentMax = Math.max(nums[r], currentMax)
            
            if(r - l + 1 == k){
                res[resIndex++] = currentMax
                if(nums[l] == currentMax){
                    currentMax = -Infinity
                    for(let j = l+1; j <= r; j++)
                        currentMax = Math.max(nums[j], currentMax)
                }
                l++
            }
        }
        return res
    }
}
