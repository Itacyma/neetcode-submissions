class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let currentBest = 0
        let max = 0
        for(let i=0; i<prices.length; i++){
            if(prices[i] - prices[currentBest] > max){
                max = prices[i] - prices[currentBest]
            }
            if(prices[i] < prices[currentBest]){
                currentBest = i
            }
        }
        return max
    }
}
