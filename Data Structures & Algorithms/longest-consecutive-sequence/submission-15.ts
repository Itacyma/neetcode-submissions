class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length == 0)
            return 0
        else if(nums.length == 1)
            return 1
        let mappa: Map<number, number> = new Map()
        let max = 1
        nums.sort((a,b) => a-b)
        for(let i=0; i<nums.length; i++){
            if(mappa.has(nums[i]-1)){
                mappa.set(nums[i], 1 + mappa.get(nums[i]-1))
                if(mappa.get(nums[i]) > max)
                    max = mappa.get(nums[i])
            }
            else
                mappa.set(nums[i], 1)
        }
        return max

    }
}
