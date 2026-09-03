class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    
    threeSum(nums: number[]): number[][] {
        let res: number[][] = []
        nums.sort((a,b) => a-b)
        for(let i = 0; i < nums.length - 2; i++){
            if(nums[i] > 0){
                break
            }
            else if (i>0 && nums[i] == nums[i-1])
                continue
            else{
                let l = i+1
                let r = nums.length-1
                while(l<r){
                    if(nums[l] + nums[r] + nums[i] > 0)
                        r--
                    else if (nums[l] + nums[r] + nums[i] < 0)
                        l++
                    else{
                        res.push([nums[l], nums[r], nums[i]])
                        while(l<r && nums[r] == nums[r-1])
                            r--
                        while(l<r && nums[l] == nums[l+1])
                            l++
                        r--
                        l++
                    }
                }
            }
        }
        return res
    }
}
