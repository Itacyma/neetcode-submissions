class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length)
            return false
        let mappa_s: Map<string, number> = new Map()
        for(let i = 0; i < s.length; i++){
            mappa_s.set(s[i], mappa_s.has(s[i]) ? mappa_s.get(s[i])+1 : 1)
            //console.log("Mappa[" + s[i] + "] = " + mappa_s.get(s[i]))
        }
        //console.log("\n-----------------\n")

        for(let i = 0; i < t.length; i++) {
            if(!mappa_s.has(t[i]) || mappa_s.get(t[i]) == 0)
                return false
            //console.log("Mappa[" + t[i] + "] = " + mappa_s.get(t[i]))
            mappa_s.set(t[i], mappa_s.get(t[i]) - 1)
        }
        return true
    }
}
