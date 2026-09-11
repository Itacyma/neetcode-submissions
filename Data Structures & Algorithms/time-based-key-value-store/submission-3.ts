class TimeMap {
    private keyStore: Map<String, Map<number, string>>
    private findKeyPos: Map<String, number[]>

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

        while(l+1 < r){
            let half = Math.trunc((l+r)/2)
            let centralTime = array[half]
            //console.log("Confronto con " + centralTime + " tra [" + array[l] + ", " + array[r] + "]")
            if(timestamp == centralTime)
                return mappa.get(centralTime)
            else if (timestamp > centralTime){
                l = half
            }
            else 
                r = half
        }
        //console.log("Uscito con l = " + array[l] + " e r = " + array[r])
        if(array[r] <= timestamp) return mappa.get(array[r])
        else return mappa.get(array[l])
    }
}
