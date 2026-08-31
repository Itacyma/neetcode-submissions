class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        return this.findSum(0, nums, target)
    }

    findSum(index: number, nums: number[], target: number): number[] {
        for(let i=index+1; i<nums.length; i++){
            if(nums[index] + nums[i] == target){
                let res: number[] = [index, i]
                return res
            }
        }
        return this.findSum(index+1, nums, target)
    }
}
