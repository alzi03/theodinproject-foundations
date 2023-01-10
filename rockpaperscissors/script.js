
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const outcome = document.querySelector('#outcome')

const choices = ['rock', 'paper','scissors']

function computer(){
    const randomPick = choices[Math.floor(Math.random()*choices.length)]
    return randomPick
}

let wins = 0;
let losses = 0;

const h1 = document.createElement('h1')

function rockround(){
    const computerChoice = computer()

    if (computerChoice == 'paper'){
        losses += 1
        h1.innerHTML = 'Computer Chose Paper, You Lose this Round'
        text.insertBefore(h1, outcome)
        if (losses >= 5){
            h1.innerHTML = 'You Lose!'
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            losses = 0
            wins = 0
            
        }
        else{
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }
    }
    else if (computerChoice == 'rock'){
        h1.innerHTML = 'Computer Chose Rock, Tie'
        text.insertBefore(div, outcome)
        outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
    }
    else{
        wins += 1
        h1.innerHTML = 'Computer Chose Scissors, You Win this Round'
        text.insertBefore(h1, outcome)
        if (wins >= 5){
            h1.innerHTML = 'You Win!'
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            losses = 0
            wins = 0
        }
        else{
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }
    }
}

function paperround(){
    const computerChoice = computer()

    if (computerChoice == 'Scissors'){
        losses += 1
        h1.innerHTML = 'Computer Chose Scissors, You Lose this Round'
        text.insertBefore(h1, outcome)
        if (losses >= 5){
            h1.innerHTML = 'You Lose!'
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            losses = 0
            wins = 0
         
        }
        else{
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }
    }
    else if (computerChoice == 'Paper'){
        h1.innerHTML = 'Computer Chose Paper, Tie'
        text.insertBefore(h1, outcome)
        outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
    }
    else{
        wins += 1
        h1.innerHTML = 'Computer Chose Rock, You Win this Round'
        text.insertBefore(h1, outcome)
        if (wins >= 5){
            h1.innerHTML = 'You Win!'
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            losses = 0
            wins = 0
        }
        else{
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }
    }
}

function scissorsround(){
    const computerChoice = computer()

    if (computerChoice == 'paper'){
        losses += 1
        h1.innerHTML = 'Computer Chose Rock, You Lose this Round'
        text.insertBefore(h1, outcome)
        if (losses >= 5){
            h1.innerHTML = 'You Lose!'
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            losses = 0
            wins = 0
            
        }
        else{
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }
    }
    else if (computerChoice == 'rock'){
        h1.innerHTML = 'Computer Chose Scissors, Tie'
        text.insertBefore(div, outcome)
        outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
    }
    else{
        wins += 1
        h1.innerHTML = 'Computer Chose Paper, You Win this Round'
        text.insertBefore(h1, outcome)
        if (wins >= 5){
            h1.innerHTML = 'You Win!'
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            losses = 0
            wins = 0
        }
        else{
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }
    }
}


const buttons = document.querySelectorAll('button')
buttons.forEach(btn => btn.addEventListener('mouseover', function (){
    buttons.style.top = 5
}))


rock.addEventListener('click', rockround)
paper.addEventListener('click', paperround)
scissors.addEventListener('click', scissorsround)

