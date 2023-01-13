
const buttons = document.querySelectorAll(`button[data-key]`)
const keys = []
for (button of buttons){
    keys.push(Number(button.attributes[0].value))
}

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']

let add = (a, b) => {
    return +a + +b
}
let subtract = (a, b) => {
    return +a - +b
}
let multiply = (a, b) => {
    return +a * +b
}
let divide = (a, b) => {
    return Math.round((+a / +b) * 100) / 100
}
const symbols = {'+':add, '-':subtract, '/':divide, '*':multiply}

let parts = [undefined, undefined, undefined];

function expression(){
    window.addEventListener('keydown', function(e){
        const keyCode = e.keyCode
        if (!(keys.includes(keyCode))) return
        const previousNumber = document.querySelector('#previousNumber')
        const currentNumber = document.querySelector('#currentNumber')
    
        if (e.keyCode == 27){
            parts = [0, undefined, undefined]
            previousNumber.textContent = `= 0`
        }

        
        if (keyCode==8){ // backspace
            currentNumber.textContent = currentNumber.textContent.slice(0, -1)}
        
        if (e.key in symbols && parts[1]==undefined){ // operand
            const operation = symbols[e.key]
            parts[0] = currentNumber.textContent
            parts[1] = operation
            previousNumber.textContent = `= ${parts[0]} ${e.key}`
            currentNumber.textContent = ''
        }  
        else if (e.key in symbols){
            const operation = symbols[e.key]
            parts[1] = operation
            previousNumber.textContent = `= ${parts[0]} ${e.key}`
            console.log(parts)
        }

        if (keyCode == 13 && currentNumber.textContent !== ''){
            parts[2] = currentNumber.textContent
            const answer = parts[1](parts[0], parts[2])
            previousNumber.textContent = `= ${answer}`
            currentNumber.textContent = ''
            parts = [answer, '']
        }


        if (numbers.includes(e.key)){currentNumber.textContent += e.key} // typing numbers
    })
}

expression()

/*
first round = parts[0, 1, 2]
parts[0] should be set to 0
parts [1] is inputted to +
parts[2] is set to user input

second round and onwards
parts[0] should be set to 0 + input
parts[1] is decided by user
parts[2] is decided by user

['','','']
first input -> parts[0]
first operation -? parts[1]
second input -> parts[2]
parts[0] = parts[1]

*/