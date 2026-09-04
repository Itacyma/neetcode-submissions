class Solution {
    minWindow(s: string, t: string): string {
        let res = ""
        if (t.length > s.length) {
            return res
        }

        let l = 0;
        let occorrenze: Map<string, number> = new Map()
        let slidingWindow: Map<string, number> = new Map()
        let min = Infinity

        for (let i = 0; i < t.length; i++) {
            if (occorrenze.has(t[i])) {
                occorrenze.set(t[i], occorrenze.get(t[i]) + 1)
            } else {
                occorrenze.set(t[i], 1)
            }
        }

        let caratteriSoddisfatti = 0

        for (let r = 0; r < s.length; r++) {
            // Aggiorno le occorrenze
            if (slidingWindow.has(s[r])) {
                slidingWindow.set(s[r], slidingWindow.get(s[r]) + 1)
            } else {
                slidingWindow.set(s[r], 1)
            }

            // La soluzione può essere valida solo se le occorrenze del carattere appena incluso 
            // corrispondono alle sue occorrenze totali
            if (occorrenze.has(s[r]) && slidingWindow.get(s[r]) === occorrenze.get(s[r])) {
                caratteriSoddisfatti++
            }

            // Riduco la finestra da SX fintanto che la soluzione rimane valida
            while (caratteriSoddisfatti === occorrenze.size) {
                if (r - l + 1 < min) {
                    min = r - l + 1;
                    res = s.slice(l, r + 1)
                }
                slidingWindow.set(s[l], slidingWindow.get(s[l]) - 1)
                if (occorrenze.has(s[l]) && slidingWindow.get(s[l]) < occorrenze.get(s[l])) {
                    caratteriSoddisfatti--
                }
                l++
            }
        }
        return res
    }
}