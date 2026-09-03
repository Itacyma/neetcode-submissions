class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let l: number = 0
        let r:number = numbers.length-1

        while(l<r){
            if(numbers[l] + numbers[r] > target)
                r--
            else if (numbers[l] + numbers[r] < target)
                l++
            else{
                return [l+1, r+1]
            }
        }
    }
}
