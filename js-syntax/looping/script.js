const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

for (const cat of cats){
    console.log(cat)
}

for (let i = 0; i<=10; i++){
    console.log(i)
}

function one(string){
    return string + 1
}

console.log(cats.map(one))

function startsWithC(string) {
    return string.startsWith('C');
}

console.log(cats.filter(startsWithC))

function factorial(n){
    sum = 1
    for (let i=1;i <= n; i++){
        sum *= i
    }
    return sum
}



// Guest List Exercise
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const len = people.length
for (i of people.slice(0,len)){
    if (i != 'Phil' && i != 'Lola')
    people.push(i)
    console.log(len)
}

console.log(people.slice(len))

// even from 2-10
for (i=2; i <= 10; i++){
    if (i%2 == 0){
        console.log(i)
    }
}

// keep inputting until over 100
let n = 0
while (n <= 100){
    n = prompt('Enter Number greater than 100')
    if (n > 100){
        break
    }
}

// all prime number less than a num


console.log('hey' * 10)