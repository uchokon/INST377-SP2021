/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* Put your javascript in here */

const carouselArray = [];

const imgs = document.querySelectorAll('.gallery li');
const arrow = document.querySelectorAll('.arrow');

for (let i = 0; i < imgs.length; i++) {
    carouselArray.push(imgs[i]);
}

arrow.onclick = function() {
    console.log('CLCIKED');
};

console.log(carouselArray[5]);
