class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let numCount: Map<number, number> = new Map()
        let maxMap: Map<number, number[]> = new Map()
        let res: number[] = new Array()
        let remaining: number = k

        for(let n of nums){
            if(!numCount.has(n))
                numCount.set(n, 0)
            numCount.set(n, numCount.get(n) + 1)
        }

        for(let [key,v] of numCount){
            if(!maxMap.has(v))
                maxMap.set(v, [])
            maxMap.get(v).push(key)
        }

        while(remaining > 0){
            let currentMax = Math.max(...maxMap.keys())
            res.push(maxMap.get(currentMax).pop())
            if(maxMap.get(currentMax).length == 0)
                maxMap.delete(currentMax)
            remaining--
        }

        return res


    }
}
