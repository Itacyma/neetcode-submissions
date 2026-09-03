class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    private area(h1, h2, b1, b2): number {
        return Math.min(h1,h2) * Math.abs(b2-b1)
    }
    maxArea(heights: number[]): number {
        let max_l = 0
        let max_r = heights.length-1
        let l = 0
        let r = heights.length-1
        let max: number = this.area(heights[l], heights[r], l, r)

        while(l<r){
            if(heights[l] > heights[max_l]){
                if(this.area(heights[l], heights[r], l, r) > max){
                    max = this.area(heights[l], heights[r], l, r)
                    max_l = l
                    max_r = r
                    console.log("Nuovo massimo: " + max + " composto dagli indici " + max_l + " e " + max_r)
                }
                else if(this.area(heights[l], heights[max_r], l, max_r) > max){
                    max = this.area(heights[l], heights[max_r], l, max_r)
                    max_l = l
                    console.log("Nuovo massimo: " + max + " composto dagli indici " + max_l + " e " + max_r)
                }
            }
            if(heights[r] > heights[max_r]){
                if(this.area(heights[l], heights[r], l, r) > max){
                    max = this.area(heights[l], heights[r], l, r)
                    max_l = l
                    max_r = r
                    console.log("Nuovo massimo: " + max + " composto dagli indici " + max_l + " e " + max_r)
                }
                else if(this.area(heights[max_l], heights[r], max_l, r) > max){
                    max = this.area(heights[max_l], heights[r], max_l, r)
                    max_r = r
                    console.log("Nuovo massimo: " + max + " composto dagli indici " + max_l + " e " + max_r)
                }
            }
            if(heights[l] > heights[r] || r == l)
                r--
            else
                l++
        }
        return max
    }
}
