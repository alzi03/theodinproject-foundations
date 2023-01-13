
const buttons = document.querySelectorAll(`button[data-key]`)
const keys = []
for (button of buttons){
    keys.push(Number(button.attributes[0].value))
}

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

let add = (a, b) => {
    return a + b
}
let subtract = (a, b) => {
    return a - b
}
let multiply = (a, b) => {
    return a * b
}
let divide = (a, b) => {
    return a / b
}
const symbols = {'+':add, '-':subtract, '/':divide, '*':multiply}


function expression(){
    window.addEventListener('keydown', function(e){
        const keyCode = e.keyCode
        if (!(keys.includes(keyCode))) return
        console.log(e.key)
        const previousNumber = document.querySelector('#previousNumber')
        const currentNumber = document.querySelector('#currentNumber')
        
        
        if (keyCode==8){ // backspace
            currentNumber.textContent = currentNumber.textContent.slice(0, -1)}

        if (e.key in symbols){ // operand
            const operation = symbols[e.key]
            
            console.log(operation)
        }

        if (numbers.includes(e.key)){currentNumber.textContent += e.key} // typing numbers
    })
}

expression()

