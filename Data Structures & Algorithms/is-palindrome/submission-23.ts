class Solution {
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            // Salta i caratteri non alfanumerici a sinistra
            while (l < r && !this.isAlphaNumeric(s[l])) {
                l++;
            }
            // Salta i caratteri non alfanumerici a destra
            while (l < r && !this.isAlphaNumeric(s[r])) {
                r--;
            }

            // Se i puntatori non si sono incrociati, confronta i caratteri in minuscolo
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }

    private isAlphaNumeric(c: string): boolean {
        return (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9');
    }
}