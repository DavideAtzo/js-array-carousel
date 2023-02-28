'use strict';

// dichiaro variabili 
const imgArray = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
let imgContent = '';
let active = 0;
let imgPreview = '';

/* <div class="prev-img"><img src="img/02.webp" alt="img"></div>
    <div class="prev-img"><img src="img/02.webp" alt="img"></div>
    <div class="prev-img"><img src="img/02.webp" alt="img"></div>
    <div class="prev-img"><img src="img/02.webp" alt="img"></div>
    <div class="prev-img"><img src="img/02.webp" alt="img"></div> */


// prendo elemento html e la inserisco in una variabile 
const slider = document.querySelector('.slider');
// ciclo for che fa inserire 5 volte gli elementi con img e classi personalizzate 
for (let i = 0; i < imgArray.length; i++) {
    console.log(imgArray[i]);
    imgContent += `<div class="box-img"><img src="img/${imgArray[i]}" alt="img"></div>`;
}
// inserisco i precedenti elementi nel contenitore html 
slider.innerHTML += imgContent;


// aggiungo la classe show nell elemento 
document.querySelector('.box-img').classList.add('show');
// dichiaro altre variabili prendendo dall'html
const prev = document.querySelector('.row-up');
const next = document.querySelector('.row-down');
const boxesImg = document.querySelectorAll('.box-img');
const preview = document.querySelector('.preview')

for (let i = 0; i < imgArray.length; i++) {
    console.log(imgArray[i]);
    imgPreview += `<div class="prev-img"><img src="img/${imgArray[i]}" alt="img"></div>`;
}
preview.innerHTML += imgPreview;

// evento click img precedente 
prev.addEventListener('click',
    function () {
        if (active > 0) {
            boxesImg[active].classList.remove('show')
            active--;
            boxesImg[active].classList.add('show');
        } else {
            boxesImg[active].classList.remove('show');
            active = 4 -1 ;
            active++;
            boxesImg[active].classList.add('show');
        }
    })
// evento click img successiva 
next.addEventListener('click',
    function () {
        if (active < boxesImg.length - 1) {
            boxesImg[active].classList.remove('show')
            active++;
            boxesImg[active].classList.add('show')
        } else if (active = 4) {
            boxesImg[active].classList.remove('show');
            active = 0 - 1;
            active++;
            boxesImg[active].classList.add('show');
        }
    })