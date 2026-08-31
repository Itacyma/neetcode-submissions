class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // idea di base:  [Hello, World] -> "2_5_5_HelloWorld"
        if(strs.length == 0){
            return ""
        }
        let res: string = strs.length.toString() + "_"
        for(let str of strs){
            res = res + str.length + "_"
        }
        res = res + strs.join("")
        console.log("Stringa risultante: " + res)
        return res 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str.length == 0)
            return []
        console.log("Stringa da decodificare: " + str)
        let res: string[] = new Array()
        let caratteriDaRimuovere: number = 0
        let stringaSplittata = str.split("_")
        let numeroElementi: number = parseInt(stringaSplittata[0]) // es. 3
        console.log("Numero di elementi: " + numeroElementi)

        caratteriDaRimuovere += numeroElementi.toString().length + numeroElementi + 1 // tolgo il numero iniziale e le _

        let arrayLunghezze = stringaSplittata.slice(1, numeroElementi+1) // es. [1, 3, 5]
        for(let elemento of arrayLunghezze) {
            caratteriDaRimuovere += elemento.toString().length
        }
        console.log("Caratteri da rimuovere: " + caratteriDaRimuovere)

        let arrayUtile = str.slice(caratteriDaRimuovere, str.length+1)
        console.log("Stringa da analizzare (slice da " + caratteriDaRimuovere + " a " + str.length +1 + "): " + arrayUtile)

        for(let i = 0, index = 0; i < numeroElementi; i++){
            res[i] = arrayUtile.slice(index, index + parseInt(arrayLunghezze[i]))
            index += parseInt(arrayLunghezze[i])
        }
        return res
    }
}
