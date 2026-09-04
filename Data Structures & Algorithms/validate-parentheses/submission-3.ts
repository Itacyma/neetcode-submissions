class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) {
            return false;
        }
        let queue: string[] = []
        let openParentesi = "{[("
        let closeParentesi = "}])"

        for(let char of s){
            if(openParentesi.includes(char)){
                queue.push(char)
            }
            else if (closeParentesi.includes(char)){
                let last = queue.pop()
                if(!((last == '(' && char == ')') || (last == '[' && char == ']') || (last == '{' && char == '}')))
                    return false
            }
        }
        return queue.length == 0
    }
}
