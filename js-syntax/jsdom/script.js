
const body = document.querySelector('body')

console.log(parent.textContent)

const p = document.createElement('p')
p.textContent = 'Hey I\'m Red!'
p.style.cssText = 'color:red;'


const h3 = document.createElement('h3')
h3.textContent = 'I\'m a blue h3'
h3.style.cssText = 'color:blue;'

const div = document.createElement('div')
div.style.cssText = 'border:3px solid black; background-color:pink;'

const h1 = document.createElement('h1')
h1.textContent = 'Im inside a div'
div.appendChild(h1)

const p2 = document.createElement('p')
p2.textContent = 'Me too'
div.appendChild(p2)

const hellobtn = document.querySelector('#hello')
hellobtn.addEventListener('click', function(e) {
    console.log(e.target.style.background = 'blue');
});

const hellobtn2 = document.querySelector('#hello2')
hellobtn2.onclick = () => console.log('Hello World 3')


body.appendChild(p)
body.appendChild(h3)
body.appendChild(div)


const buttons = document.querySelectorAll('button')

buttons.forEach((button) =>{
    button.addEventListener('click', function(e){
        console.log(e.target)
    }
    )
})