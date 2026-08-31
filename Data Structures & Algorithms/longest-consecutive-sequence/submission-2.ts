class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length==0) 
            return 0
        let max = 1
        let current = 1
        nums.sort((a,b) => a-b)
        console.log("Vettore: " + nums)
        for(let i=1; i<nums.length; i++){
            if(nums[i] == nums[i-1])
                continue
            else if(nums[i] == nums[i-1] + 1){
                current += 1
            }
            else{
                console.log("Interrotto a: " + nums[i])
                if(current > max){
                    max = current
                }
                current = 1
            }
        }
        return (current>max) ? current : max
    }
}
