'use strict';

// dichiaro variabili 
const imgArray = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
let imgContent = '';
let active = 0;

// prendo elemento html e la inserisco in una variabile 
const slider = document.querySelector('.slider');

for(let i = 0; i < imgArray.length; i++){
    console.log(imgArray[i]);
    imgContent += `<div class="box-img"><img src="img/${imgArray[i]}" alt=""></div>`;
}
slider.innerHTML += imgContent;

document.querySelector('.box-img').classList.add('show');
const prev = document.querySelector('.row-up');
const next = document.querySelector('.row-down');
const boxesImg = document.querySelectorAll('.box-img');
console.log(boxesImg);

prev.addEventListener('click',
    function () { 
        // if (active > 0) {
        //     itemImg[active].classList.remove('show')
        //     active--;
        //     itemImg[active].classList.add('show');
        // }
    })

next.addEventListener('click',
    function () {
        if (active < boxesImg.length - 1) {
            boxesImg[active].classList.remove('show')
            active++;
            boxesImg[active].classList.add('show')
        }
    })