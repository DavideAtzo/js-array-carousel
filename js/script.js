'use strict';

// dichiaro variabili 
const imgArray = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
let imgContent = '';
let active = 0;
// prendo elemento html e la inserisco in una variabile 
const slider = document.querySelector('.slider');

for(let i = 0; i < imgArray.length; i++){
    console.log(imgArray[i]);
    imgContent += '<div class="box-img"><img src="img/01.webp" alt="img"></div>';
}
slider.innerHTML += imgContent;

document.querySelector('.box-img').classList.add('show');
const prev = document.querySelector('.row-up');
const next = document.querySelector('.row-down');
const boxesImg = document.querySelectorAll('.box-img');
console.log(boxesImg);

prev.addEventListener('click',
    function () {
    })

next.addEventListener('click',
    function () {
        console.log('ho cliccato su next');
        console.log(active);
        console.log('incremento active');
        active++;
        console.log(active);
    })