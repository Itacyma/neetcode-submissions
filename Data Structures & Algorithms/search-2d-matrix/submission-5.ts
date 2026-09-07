class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let l = 0;
        let r = rows * cols - 1;

        while (l <= r) {
            let mid = Math.trunc((l + r) / 2);
            let row = Math.trunc(mid / cols);
            let col = mid % cols;
            let val = matrix[row][col];

            if (val === target) {
                return true;
            } else if (val < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return false;
    }
}
