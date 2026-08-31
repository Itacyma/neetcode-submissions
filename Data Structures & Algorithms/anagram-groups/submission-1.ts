class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs: string[]): string[][] {
        let res: string[][] = new Array([strs[0]])
        let index: number = 0
        let resultMap: Map<string, string[]> = new Map()
        for(let i=0; i<strs.length; i++){
            let key = strs[i].split("").sort().join("")

            if(! resultMap.has(key))
                resultMap.set(key, [])
            resultMap.get(key).push(strs[i])
        }
        for(let [k,v] of resultMap) {
            res[index++] = v
        }
        return res
    }
}
