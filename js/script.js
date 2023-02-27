'use strict';

// dichiaro variabili 
const imgArray = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp',];
let img = '';
let active = 0;

// prendo elemento html e la inserisco in una variabile 
const slider = document.querySelector('.slider');
const rowUp = document.querySelector('.row-up');
const rowDown = document.querySelector('.row-down');

rowUp.addEventListener('click',
function(){
    alert('img precedente')
})


rowDown.addEventListener('click',
function(){
    alert('img precedente')
})