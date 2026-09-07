class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length-1
        while(l <= r) {
            let half = Math.trunc((r+l)/2)
            if(nums[half] > target)
                r = half - 1
            else if (nums[half] < target)
                l = half + 1
            else
                return half
        }
        return -1
    }
}
