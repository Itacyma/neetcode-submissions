class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: string[] = []

        for(let tok of tokens){
            if(parseInt(tok) || tok == "0"){
                stack.push(tok)
            }
            else {
                let num1 = parseInt(stack.pop())
                let num2 = parseInt(stack.pop())
                switch(tok){
                    case "+":
                        stack.push((num2 + num1).toString()) 
                        break
                    case "-":
                        stack.push((num2 - num1).toString()) 
                        break
                    case "*":
                        stack.push((num2 * num1).toString()) 
                        break
                    case "/":
                        stack.push((num2 / num1).toString()) 
                        break
                    default:
                        break
                }
            } 
        }
        return parseInt(stack[0])
    }
}
