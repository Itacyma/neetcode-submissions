class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prod = 1
        let zero_index = -1
        let res: number[] = new Array(nums.length).fill(0)

        for(let i=0; i<nums.length; i++)
            if(nums[i] == 0){
                if(zero_index == -1)
                    zero_index = i
                else
                    return res
            }
        
        for(let i=0; i<nums.length; i++)
            if(i != zero_index)
                prod = prod * nums[i]

        for(let i=0; i<nums.length; i++){
            if(zero_index == -1)
                res[i] = prod/nums[i]
            else{
                if(i != zero_index)
                    res[i] = 0
                else
                    res[i] = prod
            }
        }
        return res
    }
}
