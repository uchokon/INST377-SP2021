/* eslint-disable prefer-template */
/* eslint-disable space-before-blocks */
/* eslint-disable quotes */
/* eslint-disable no-alert */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* Put your javascript in here */

let width = 130;
let count = 3;
let position = 0; // ribbon scroll position

const list = document.querySelector('ul');
const listElems = document.querySelectorAll('li');
const imgs = document.querySelectorAll('.gallery li');
const prev = document.querySelectorAll('.prev');
const next = document.querySelectorAll('.next');

const carouselArray = [];

for (let i = 0; i < imgs.length; i++) {
    carouselArray.push(imgs[i]);
}

function movePrev() {
    // shift left
    position += width * count;
    // can't move to the left too much, end of images
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
}

function moveNext() {
    // shift right
    position -= width * count;
    // can only shift the ribbbon for (total ribbon length - visible count) images
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
}

prev[0].addEventListener("click", movePrev);
next[0].addEventListener("click", moveNext);
