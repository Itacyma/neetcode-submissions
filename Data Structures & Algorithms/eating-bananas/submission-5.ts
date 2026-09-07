class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        piles.sort((a,b) => a-b)
        console.log("Vettore: [" + piles + "]")
        let l = 1, r = piles[piles.length-1], k = Infinity

        while(l <= r) {
            let half = Math.trunc((l+r)/2)
            console.log("Provo a mangiare ad un ritmo di " + half + " banane/h" )
            let success = this.canEat(piles, half, h)
            if(success) { // provo a diminuire
                console.log("Successo")
                r = half -1
                if(half < k)
                    k = half
            }
            else
                l = half + 1

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
