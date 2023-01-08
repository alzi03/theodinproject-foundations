
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



function rockround(){
    const computerChoice = computer()

    if (computerChoice == 'paper'){
        losses += 1
        outcome.innerHTML = 'Computer Chose Paper, You Lose this Round'
        if (losses == 5){
            setTimeout(() => {
                outcome.innerHTML = 'You Lose!'
            }, 1000);
            losses = 0
            wins = 0
        }
        else{
            setTimeout(() => {
                outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            }, 1000);
        }
    }
    else if (computerChoice == 'rock'){
        outcome.innerHTML = 'Computer Chose Rock, Tie'
        setTimeout(() => {
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }, 1000);
    }
    else{
        wins += 1
        outcome.innerHTML = 'Computer Chose Scissors, You Win this Round'
        if (wins == 5){
            setTimeout(() => {
                outcome.innerHTML = 'You Win!'
            }, 1000);
            losses = 0
            wins = 0
        }
        else{
            setTimeout(() => {
                outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            }, 1000);
        }
    }
}

function paperround(){
    const computerChoice = computer()

    if (computerChoice == 'scissors'){
        losses += 1
        outcome.innerHTML = 'Computer Chose Scissors, You Lose this Round'
        if (losses == 5){
            setTimeout(() => {
                outcome.innerHTML = 'You Lose!'
            }, 1000);
            losses = 0
            wins = 0
        }
        else{
            setTimeout(() => {
                outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            }, 1000);
        }
    }
    else if (computerChoice == 'paper'){
        outcome.innerHTML = 'Computer Chose Paper, Tie'
        setTimeout(() => {
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }, 1000);
    }
    else{
        wins += 1
        outcome.innerHTML = 'Computer Chose Rock, You Win this Round'
        if (wins == 5){
            setTimeout(() => {
                outcome.innerHTML = 'You Win!'
            }, 1000);
            losses = 0
            wins = 0
        }
        else{
            setTimeout(() => {
                outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            }, 1000);
        }
    }
}

function scissorsround(){
    const computerChoice = computer()

    if (computerChoice == 'rock'){
        losses += 1
        outcome.innerHTML = 'Computer Chose Rock, You Lose this Round'
        if (losses == 5){
            setTimeout(() => {
                outcome.innerHTML = 'You Lose!'
            }, 1000);
            losses = 0
            wins = 0
        }
        else{
            setTimeout(() => {
                outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            }, 1000);
        }
    }
    else if (computerChoice == 'scissors'){
        outcome.innerHTML = 'Computer Chose Scissors, Tie'
        setTimeout(() => {
            outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
        }, 1000);
    }
    else{
        wins += 1
        outcome.innerHTML = 'Computer Chose Paper, You Win this Round'
        if (wins == 5){
            setTimeout(() => {
                outcome.innerHTML = 'You Win!'
            }, 1000);
            losses = 0
            wins = 0
        }
        else{
            setTimeout(() => {
                outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
            }, 1000);
        }
    }
}

rock.addEventListener('click', rockround)
paper.addEventListener('click', paperround)
scissors.addEventListener('click', scissorsround)
