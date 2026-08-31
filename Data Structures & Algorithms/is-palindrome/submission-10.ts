class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let vett = Array.from(s.split(" ")).join("")
        let pulito = Array.from(vett).filter(s => (s >= "A" && s <= "Z") || (s >= "a" && s<="z") || (s>="0" && s<="9"))
        console.log(pulito)

        let l = 0, r = pulito.length - 1
        while(l <= r){
            if(!this.confronta(pulito[l++][0], pulito[r--][0])){
                console.log("Errore tra " + pulito[l-1] + " e " + pulito[r+1])
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
