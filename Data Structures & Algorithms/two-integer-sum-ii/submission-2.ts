class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let mappa: Map<number, number> = new Map()
        for(let i=0; i < numbers.length; i++) {
            if(mappa.get(numbers[i])){
                return [mappa.get(numbers[i]), i+1]
            }
            mappa.set(target-numbers[i], i+1)
        }
    }
}
