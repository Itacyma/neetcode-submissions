class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let visited: Set<number> = new Set()
        for(let i=0; i < nums.length; i++) {
            if(visited.has(nums[i]))
                return true
            visited.add(nums[i])
        }
        return false
    }
}
