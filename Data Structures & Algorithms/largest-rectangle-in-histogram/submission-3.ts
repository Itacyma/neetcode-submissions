class Solution {
    largestRectangleArea(heights: number[]): number {
        let max = 0;
        let stack: [number, number][] = [];

        for (let i = 0; i < heights.length; i++) {
            let start = i;

            while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                let [prevIndex, prevHeight] = stack.pop()!;
                max = Math.max(max, prevHeight * (i - prevIndex));
                start = prevIndex;
            }

            stack.push([start, heights[i]]);
        }

        for (let [start, height] of stack) {
            max = Math.max(max, height * (heights.length - start));
        }

        return max;
    }
}