const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);

const button = document.querySelector('#hellobutton');
button.addEventListener('click', (event) => console.log('Hello'));

const input = document.querySelector("#name")
const yourname = document.querySelector("#yourname")
const submit = document.querySelector('#submit')

submit.addEventListener('click', (event) => yourname.textContent = `Hello ${input.value}.`);

let product = (a, b) => a * b
console.log( product(3, 4))

// ? Conditionals + using shorthand fcn definition
const statement = 'The Minimum is '
let min = (a, b) => (a < b) ? statement + a : statement + b
console.log(min(3, 4))



/* Anonymous Functions
textBox.addEventListener('keydown', function(event){
    console.log(`You pressed "${event.key}"`)
});
These two do the same thing, one line in the curly brackets so not necessary, and since there's one parameter the function doesn't require parantheses around the paramter
*/




