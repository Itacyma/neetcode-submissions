class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l: number = 0
        let r:number = numbers.length-1
        let sum: number = 0

        while(l<r){
            sum = numbers[l] + numbers[r]
            if(sum > target)
                r--
            else if (sum < target)
                l++
            else{
                return [l+1, r+1]
            }
        }
    }
}
