



let images = document.querySelectorAll('.container img')
let popup = document.querySelector('.popup')
let popupimg = document.querySelector('.popup img')
let cancelBtn = document.querySelector('button')

function openPopup(event){
    popupimg.src = event.target.src
    popup.classList.add('show')
    }

function closePopup(event){

    popup.classList.remove('show')
}

images.forEach(image =>{
    image.addEventListener('click', openPopup)
})

cancelBtn.addEventListener('click', closePopup)

let num = prompt('Enter Number')

for(let a = 1; a <= num; a++){
    for(let b = 1; b <= 10; b++){
        console.log(`${a} * ${b} = ${a * b}`)
    }
}
