class Solution {
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;
        const alphanumeric = "abcdefghijklmnopqerstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ0123456789"

        while (l < r) {
            while (l < r && !alphanumeric.includes(s[l])) {
                l++
            }
            while (l < r && !alphanumeric.includes(s[r])) {
                r--
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            }

            l++
            r--
        }

        return true
    }
}