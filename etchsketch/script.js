const slider = document.querySelector('.slider')
let n = slider.value
let auto = ''
let pencolor = ''


const colorMode = document.querySelector('#color')
const eraseMode = document.querySelector('#eraser')
const rainbowMode = document.querySelector('#rainbow');
const clear = document.querySelector('#clear')
const size = document.querySelector('.size')

const color = document.querySelector('#colorwheel')
let currentcolor = color.value
color.addEventListener('change', ()=> {
    currentcolor = color.value
})

buttons = [rainbowMode, eraseMode, colorMode]

function removeBg(){
    for (button of buttons){
        button.classList.remove('clicked')
    }
}

rainbowMode.addEventListener('click', function(e){
    pencolor = 'rainbow'
    removeBg()
    this.classList.add('clicked')
})
eraseMode.addEventListener('click', function(e){
    pencolor = 'eraser'
    removeBg()
    this.classList.add('clicked')
})
colorMode.addEventListener('click', function(e){
    pencolor = 'color'
    removeBg()
    this.classList.add('clicked')
})
clear.addEventListener('click', () => {
    let boxes = document.querySelectorAll('grid-item')
    for (box of boxes){
        box.style.cssText = 'background-color:white;'
    }
})



let mouseDown = false
document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false


function griddy(n){

    for (i=0; i<n; i++){
        auto += 'auto '
    }

    let squares = n * n;

    const container = document.querySelector('.container');
    let gridnum = 0;

    const griditems = document.querySelectorAll('.grid-item')
    griditems.forEach(griditem => griditem.remove())

    while (gridnum !== (squares)){
        gridnum++
        let grid_item = document.createElement('grid-item')
        grid_item.classList.add('grid-item')
        container.appendChild(grid_item)
    }
    container.style.cssText = `grid-template-columns:${auto}`

    console.log(squares)
    

    const items = document.querySelectorAll('grid-item')
    items.forEach(item => item.addEventListener('mousedown', changeColor))
    items.forEach(item => item.addEventListener('mouseover', changeColor))
}

slider.addEventListener('change', () =>{
    size.textContent = `${slider.value} x ${slider.value}`
    auto = ''
    grids = document.querySelectorAll('grid-item')
    grids.forEach(grid => grid.style.cssText = 'background-color:white;')
    griddy(slider.value)
})


function changeColor(e){

    console.log(slider.value)

    if (e.type !== 'mouseover' | !mouseDown) return


    if (pencolor == 'color'){
        this.style.cssText = `background-color:${currentcolor};`;
    }
    else if (pencolor == 'eraser'){
        this.style.cssText = 'background-color:white;';
    }
    else if (pencolor =='rainbow'){
        randomr = (Math.floor(Math.random() * 255));
        randomg = (Math.floor(Math.random() * 255));
        randomb = (Math.floor(Math.random() * 255));
        this.style.cssText = `background-color:rgb(${randomr}, ${randomg}, ${randomb})`
    }
    
}

griddy(n)


