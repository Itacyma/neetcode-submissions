class TimeMap {
    private keyStore: Map<string, Map<number, string>>
    private findKeyPos: Map<string, number[]>

    constructor() {
        this.keyStore = new Map()
        this.findKeyPos = new Map()
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {

        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, new Map())
            this.findKeyPos.set(key, [])
        }
        this.keyStore.get(key).set(timestamp, value)    
        this.findKeyPos.get(key).push(timestamp)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if(!this.keyStore.has(key)) return ""
        let mappa = this.keyStore.get(key)
        let array = this.findKeyPos.get(key)
        if(array[0] > timestamp) return ""

        let l = 0, r = array.length - 1

        let bestTime = -1

        while (l <= r) {
            let mid = Math.trunc((l + r) / 2)
            let centralTime = array[mid]

            if (centralTime === timestamp) {
                return mappa.get(centralTime)!
            } else if (centralTime < timestamp) {
                bestTime = centralTime 
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return bestTime !== -1 ? mappa.get(bestTime)! : ""
    }
}
