class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        let missingHigher: number[] = [temperatures[0]]
        let missingHigherIndexes: number[] = [0]
        let res: number[] = []

        for(let i = 1; i < temperatures.length; i++){
            for(let idx = missingHigherIndexes[missingHigherIndexes.length -1], val = missingHigher[missingHigher.length -1];
            val < temperatures[i] && missingHigherIndexes.length > 0; val = missingHigher[missingHigher.length-1], idx = missingHigherIndexes[missingHigherIndexes.length -1]){
                res[idx] = i - idx
                missingHigher.pop()
                missingHigherIndexes.pop()
            }
            missingHigherIndexes.push(i)
            missingHigher.push(temperatures[i])
        }

        for(let idx of missingHigherIndexes){
            res[idx] = 0
        }

        return res

    }
}
