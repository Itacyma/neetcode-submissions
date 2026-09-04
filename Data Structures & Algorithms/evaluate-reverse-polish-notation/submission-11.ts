class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = []

        for(let tok of tokens){
            if(tok != "+" && tok != "-" && tok != "*" && tok != "/" ){
                stack.push(parseInt(tok))
            }
            else {
                let num1 = stack.pop()
                let num2 = stack.pop()
                switch(tok){
                    case "+":
                        stack.push((num2 + num1)) 
                        break
                    case "-":
                        stack.push((num2 - num1)) 
                        break
                    case "*":
                        stack.push((num2 * num1)) 
                        break
                    case "/":
                        stack.push(Math.trunc(num2 / num1)) 
                        break
                    default:
                        break
                }
            } 
        }
        return stack[0]
    }
}
