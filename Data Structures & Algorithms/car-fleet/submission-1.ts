class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        if(position.length < 1)
            return 0
        let macchine: number[][] = []
        let stackTempi: number[] = []
        for(let i=0; i<position.length; i++){
            macchine[i] = [position[i], speed[i]]
        }
        macchine.sort((a,b) => a[0] - b[0])
        for(let i=position.length-1; i>=0; i--){
            let tempoArrivo = (target - macchine[i][0]) / macchine[i][1];

            stackTempi.push(tempoArrivo);

            // Se la macchina attuale ci mette MENO o UGUALE tempo rispetto a quella davanti,
            // significa che la raggiunge e si unisce alla sua flotta (rimuovila dallo stack)
            let len = stackTempi.length;
            if (len >= 2 && stackTempi[len - 1] <= stackTempi[len - 2]) {
                stackTempi.pop();
            }
        }
        return stackTempi.length
    }
}
