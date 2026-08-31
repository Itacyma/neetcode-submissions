class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let pulito = Array.from(s.split(" ").join("")).filter(s => (s >= "A" && s <= "Z") || (s >= "a" && s<="z") || (s>="0" && s<="9"))

        let l = 0, r = pulito.length - 1
        while(l <= r){
            if(!this.confronta(pulito[l++][0], pulito[r--][0])){
                return false
            }
        }
        return true
    }

    confronta(a: string, b: string): boolean{
        if (a >= "A" && a <= "Z")
            a = a.toLowerCase()
        if (b >= "A" && b <= "Z")
            b = b.toLowerCase()
        return a === b
    }
}
