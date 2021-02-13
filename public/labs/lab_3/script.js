/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* Put your javascript in here */

// const li = document.querySelectorAll('li');

// for (const li of document.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//   i++;
// }

// /* configuration */
// const width = 130; // image width
// const count = 3; // visible images count

// const list = document.querySelector('ul');
// const listElems = document.querySelectorAll('li');

// let position = 0; // ribbon scroll position

// document.querySelector('.prev').onclick = function() {
//   // shift left
//   position += width * count;
//   // can't move to the left too much, end of images
//   position = Math.min(position, 0);
//   list.style.marginLeft = `${position}px`;
// };

// document.querySelector('.next').onclick = function() {
//   // shift right
//   position -= width * count;
//   // can only shift the ribbbon for (total ribbon length - visible count) images
//   position = Math.max(position, -width * (listElems.length - count));
//   list.style.marginLeft = `${position}px`;
// };