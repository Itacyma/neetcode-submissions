class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let maxPile = 0
        for (let pile of piles) {
            if (pile > maxPile) {
                maxPile = pile
            }
        }
        let l = 1, r = maxPile, k = maxPile

        while(l <= r) {
            let half = Math.trunc((l+r)/2)
            let success = this.canEat(piles, half, h)
            if(success) { // provo a diminuire
                k = half
                r = half -1
            }
            else
                l = half +1

        }
        return k
    }

    private canEat(piles: number[], k: number, h: number): boolean{
        let counter = 0
        let i = 0
        for(i = 0; i < piles.length && counter <= h; i++){
            counter += Math.trunc((piles[i]-1)/k) + 1
        }
        return counter <= h && i == piles.length

    }
}
