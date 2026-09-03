class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    private area(h1, h2, b1, b2): number {
        return Math.min(h1,h2) * Math.abs(b2-b1)
    }

    maxArea(h: number[]): number {
        let max = 0
        let max_l = 0
        let max_r = h.length-1
        let l = 0
        let r = h.length-1

        while(l<r){
            let currentArea = this.area(h[l], h[r], l, r) 
            if(currentArea > max){
                max = currentArea
                max_l = l
                max_r = r
            }
            let k = 0
            if(h[l] >= h[r]){ // destra più bassa
                const current = h[r];
                while(r-k>l && h[r-k] <= current) //alzo da destra
                    k++
                r-=k
            }
            else { // sinistra più bassa
                const current = h[l];
                while(l+k<r && h[l+k] <= current) //alzo da destra
                    k++
                l+=k
            }
        }
        return max
    }
}
