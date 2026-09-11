class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0, r = nums.length-1
        while(l<=r){
            let half = Math.trunc((l+r)/2) 
            if(nums[half] == target)
                return half
            if(nums[r] == target)
                return r
            else if (nums[half] > nums[r]) { // metà di sinistra ordinata
                if(target >= nums[l] && target < nums[half])
                    r = half - 1
                else 
                    l = half + 1
            } else {
                if(target > nums[half] && target < nums[r])
                    l = half + 1
                else
                    r = half - 1
            }
        }
        return -1
    }
}
