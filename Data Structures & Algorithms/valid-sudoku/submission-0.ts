class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = Array.from({ length: 9 }, () => new Set<string>());
        const cols = Array.from({ length: 9 }, () => new Set<string>());
        const boxes = Array.from({ length: 9 }, () => new Set<string>());

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const val = board[i][j];
                if (val === ".") continue;

                const indice = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i].has(val) || cols[j].has(val) || boxes[indice].has(val)) {
                    return false;
                }

                rows[i].add(val);
                cols[j].add(val);
                boxes[indice].add(val);
            }
        }

        return true;
    }
}
