let slider = document.querySelector('input');
let grid = document.getElementsByClassName('value');

grid[0].innerHtml = slider.value;
grid[1].innerHtml = slider.value;

slider.oninput = function(){
    grid[0].innerHTML = (this.value);
    grid[1].innerHTML = this.value;
    let len = slider.value;
    
    let box = document.querySelectorAll('.grid-item');
    let x = box.length;
    for(j = 0; j < x; j++){
        let boxes = document.querySelector('.container');
        boxes.removeChild(boxes.firstElementChild);
    }
    for (i = 0; i < len*len; i++){
        let boxes = document.querySelector('.container');
        let box = document.createElement('div');
        box.classList.add('grid-item');
        boxes.appendChild(box);
    }
    let boxes = document.querySelector('.container');  
    
    boxes.style.gridTemplateColumns = 'repeat(' + len + ', auto)';
    boxes.style.gridTemplateRows = 'repeat(' + (len) + ',auto)';

}



slider.addEventListener('mousemove', () => {
    let len = slider.value;
    color = "linear-gradient(90deg, #fcc729 "+len+"%, whitesmoke "+(len)+"%)";
    slider.style.background = color;
})

let buttons = document.querySelectorAll('button')
buttons[0].addEventListener('click', ()=>{
    let boxes = document.querySelectorAll('.grid-item');
    boxes.forEach((box) =>{
        box.addEventListener('mouseover', ()=>{
            box.style.backgroundColor = 'black';
        })
    })
})


buttons[2].addEventListener('click', ()=>{
    let boxes = document.querySelectorAll('.grid-item');
    for (i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = 'white';
    }
})

buttons[1].addEventListener('click', ()=>{
    
    let boxes = document.querySelectorAll('.grid-item');
    
    boxes.forEach((box) =>{
        box.addEventListener('mouseover', ()=>{
            let red = Math.floor(Math.random()* 256);
            let blue = Math.floor(Math.random()* 256);
            let green = Math.floor(Math.random()* 256);
            let hue = Math.floor(Math.random()* 361);
            box.style.backgroundColor = 'hsl(' + hue + ',100%,50%)';

        })
    })
})

