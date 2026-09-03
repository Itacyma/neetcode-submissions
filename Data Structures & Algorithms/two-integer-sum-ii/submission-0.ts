class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let mappa: Map<number, number> = new Map()
        let res: number[] = new Array()
        for(let i=0; i < numbers.length; i++) {
            if(mappa.get(numbers[i])){
                res.push(mappa.get(numbers[i]))
                res.push(i+1)
                return res
            }
            mappa.set(target-numbers[i], i+1)
        }
        return res
    }
}
