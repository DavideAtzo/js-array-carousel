'use strict';

// dichiaro variabili 
const imgArray = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
let imgContent = '';

// prendo elemento html e la inserisco in una variabile 
const slider = document.querySelector('.slider');

for(let i = 0; i < imgArray.length; i++){
    console.log(imgArray[i]);
    imgContent += '<div class="box-img"><img src="img/01.webp" alt="img"></div>';
}
slider.innerHTML += imgContent

document.querySelector('.box-img').classList.add('show');
