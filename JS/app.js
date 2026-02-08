



let images = document.querySelectorAll('.container img')
let popup = document.querySelector('.popup')
let popupimg = document.querySelector('.popup img')
let cancelBtn = document.querySelector('button')

function openPopup(event){
    popupimg.src = event.target.src
    popup.classList.add('show')
    }

function closePopup(event){
    console.log(event)
    let targetEle = event.target
    if(targetEle.classList.contains('popup') || targetEle.classList.contains('cancelBtn') || event.key == 'Escape'){
    popup.classList.remove('show')
    }
}

images.forEach(image =>{
    image.addEventListener('click', openPopup)
})

cancelBtn.addEventListener('click', closePopup)
popup.addEventListener('click', closePopup)
window.addEventListener('keyup', closePopup)

let num = prompt('Enter Number')

for(let a = 1; a <= num; a++){
    for(let b = 1; b <= 10; b++){
        console.log(`${a} * ${b} = ${a * b}`)
    }
}


let cursor = document.querySelector('.cursor')
let cursorSm = document.querySelector('.cursor-sm')

function mouseMove(event) {
    let left = event.pageX
    let top = event.pageY

    cursor.style.top = top +'px'
    cursor.style.left = left +'px'
    cursorSm.style.top = top +'px'
    cursorSm.style.left = left +'px'
    
}

window.addEventListener('mousemove', mouseMove)
