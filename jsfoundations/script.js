let name = "John";
let admin = name;
console.log(admin)

let earth = 'earth';
let currentUser = 'Alam';
console.log(earth);
console.log(currentUser);

let x = 5;
x--;
console.log(x)

let y = 123e+5;
let z = 123e-5;
console.log(y), console.log(z)
x = 0.2 + 0.1
console.log(x)

y = 10
z = 20
x = 'The result is: ' + (y + z)
console.log(x)

x = '100'
y = 10
z = x - y
console.log(typeof(z))

/* Objects*/

const person = {firstname:"Alam", lastname:"Zishan", age:"19", eyeColor:"brown"};
person;

x = 1.9812739813;
const xfixed = x.toFixed(2);
console.log(xfixed);

const num1 = 10;
const num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;

console.log(num1)
console.log(num2)

let a = 10;
console.log(a);
9 * a
let b = 7 * a;
console.log(b)

const max = 57;
const actual = max - 13;
const percentage = actual / max
console.log(percentage.toFixed(4))

g = new Number(573)
console.log(g)

g = 5 - "ok"
console.log(g)

x = 'hi'
y = "hello"
z = `${x}`
console.log(x)
console.log(y)
console.log(z);

let text = 'Peter Piper picked a pickled pepper'
one = text.slice(0, 5)
two = text.substring(-3, 5)
three = text.substr(0, 5)
console.log(one), console.log(two), console.log(three)

text = 'I love Apples';
newtext = text.replace('Apples', 'Kiwis');
console.log(newtext);

x = '5'
x = x.padStart(4, '0')
console.log(x)

let age = 91;

y = prompt("Enter a login:")

if (y === 'Admin'){
    x = prompt("Password:");
    if (x === 'TheMaster') {
        console.log('Welcome')
    }
    else if (x === 'Cancel'){
        console.log('Canceled')
    }
    else{
        console.log('Wrong Password')
    }
}
else if (y === 'Cancel'){
    console.log('Cancelled')
}
else{
    console.log('I don\'t know you')
}

/* Car Selector */
/*
const car = document.querySelector('select');
const para = document.querySelector('p');

const choice = car.value
car.addEventListener('change', carChoice)

function carChoice(){
    if (choice === 'Toyota'){
        console.log('Good ol\' reliable')
    }
    else if (choice === 'Tesla'){
        console.log('The New Wave')
    }
    else if (choice = 'BMW'){
        console.log('Luxury and a Classic')
    }
    else if (choice = 'Mercedes'){
        console.log('BMW 2.0')
    }
    else{
        console.log('')
    }
}
*/

/* ? Conditionals */
age = 19;
output = (age>18) ? 1:2;
console.log(output)

output = (age < 3) ? 'Baby':
(age < 13) ? 'Child':(age < 18) ? 'Teenager': 'Adult'
console.log(output)



/* Nested ? */
/* realname = prompt('What is the real name of Javascript?', '') 
output2 = (realname === 'ECMAScript') ? 'Correct' : 'Incorrect'
console.log(output2)
*/

number = prompt('Enter a number:', '')
output3 = (number > 0) ? 'Greater than 1' : (number == 0) ? 'Zero' : 'Less than 1'
console.log(output3)
