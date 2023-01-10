
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const outcome = document.querySelector('#outcome')

const choices = ['rock', 'paper','scissors']


// computer choosing randomly
function computer(){
    const randomPick = choices[Math.floor(Math.random()*choices.length)]
    return randomPick.toLowerCase()
}

let wins = 0;
let losses = 0;

const h1 = document.createElement('h1')
const text = document.querySelector('#text')


// picking rock

function rockround(){ 
    const computerChoice = computer()

    if (wins == 0 && losses == 0){ // removes the picks from the previous set

        picks = document.querySelectorAll('pick')
        picks.forEach(pick => text.removeChild(pick))

    }
    
    const pick = document.createElement('pick') // displays the picks from each round
    pick.textContent = `rock | ${computerChoice}`
    text.appendChild(pick)


    if (computerChoice == 'paper'){
        losses += 1
        h1.innerHTML = 'Computer Chose Paper, You Lose this Round'
        text.insertBefore(h1, outcome)

        // ends the set
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
        text.insertBefore(h1, outcome)
        outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
    }
    else{
        wins += 1
        h1.innerHTML = 'Computer Chose Scissors, You Win this Round'
        text.insertBefore(h1, outcome)

        // ends the set
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

    if (wins == 0 && losses == 0){

        picks = document.querySelectorAll('pick')
        picks.forEach(pick => text.removeChild(pick))

    }
    
    const pick = document.createElement('pick')
    pick.textContent = `paper | ${computerChoice}`
    text.appendChild(pick)


    if (computerChoice == 'scissors'){
        losses += 1
        h1.innerHTML = 'Computer Chose Scissors, You Lose this Round'
        text.insertBefore(h1, outcome)

        // ends the set
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
    else if (computerChoice == 'paper'){
        h1.innerHTML = 'Computer Chose Paper, Tie'
        text.insertBefore(h1, outcome)
        outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
    }
    else{
        wins += 1
        h1.innerHTML = 'Computer Chose Rock, You Win this Round'
        text.insertBefore(h1, outcome)

        // ends the set
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

    if (wins == 0 && losses == 0){

        picks = document.querySelectorAll('pick')
        picks.forEach(pick => text.removeChild(pick))

    }
    
    const pick = document.createElement('pick')
    pick.textContent = `scissors | ${computerChoice}`
    text.appendChild(pick)

    

    if (computerChoice == 'rock'){
        losses += 1
        h1.innerHTML = 'Computer Chose Rock, You Lose this Round'
        text.insertBefore(h1, outcome)

        // ends the set
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
    else if (computerChoice == 'scissors'){
        h1.innerHTML = 'Computer Chose Scissors, Tie'
        text.insertBefore(h1, outcome)
        outcome.innerHTML = `Humans ${wins} | ${losses} Computers`
    }
    else{
        wins += 1
        h1.innerHTML = 'Computer Chose Paper, You Win this Round'
        text.insertBefore(h1, outcome)

        // ends the set
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


rock.addEventListener('click', rockround)
paper.addEventListener('click', paperround)
scissors.addEventListener('click', scissorsround)

