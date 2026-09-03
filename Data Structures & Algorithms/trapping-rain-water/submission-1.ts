class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(h: number[]): number {
        let l = 0;
        let r = h.length - 1;
        let maxL = 0;
        let maxR = 0;
        let tot = 0;

        while (l < r) {
            if (h[l] <= h[r]) {
                if (h[l] >= maxL) {
                    maxL = h[l]; 
                } else {
                    tot += maxL - h[l]; 
                }
                l++;
            } else {
                if (h[r] >= maxR) {
                    maxR = h[r];
                } else {
                    tot += maxR - h[r]; 
                }
                r--;
            }
        }

        return tot;
    }
}
