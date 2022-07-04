const ulPixelBoard = window.document.querySelector('ul#pixel-board');
for (let indice = 1; indice <= 25; indice += 1) {
  const itemLi = window.document.createElement('li');
  itemLi.className = 'pixel white';
  ulPixelBoard.appendChild(itemLi);
};

let selected = 'black';

const corPreto = window.document.querySelector('li.black');
const corbottleGreen = window.document.querySelector('li.bottleGreen');
const coroceanGreen = window.document.querySelector('li.oceanGreen');
const corblueVioletWheel = window.document.querySelector('li.blueVioletWheel');

corPreto.addEventListener('click', function () {
  corbottleGreen.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  corPreto.classList.add('selected');
  selected = 'black';
});
corbottleGreen.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  corbottleGreen.classList.add('selected');
  selected = 'bottleGreen';
});
coroceanGreen.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  corbottleGreen.classList.remove('selected');
  corblueVioletWheel.classList.remove('selected');
  coroceanGreen.classList.add('selected');
  selected = 'oceanGreen';
});
corblueVioletWheel.addEventListener('click', function () {
  corPreto.classList.remove('selected');
  corbottleGreen.classList.remove('selected');
  coroceanGreen.classList.remove('selected');
  corblueVioletWheel.classList.add('selected');
  selected = 'blueVioletWheel';
});

ulPixelBoard.addEventListener('click', function (arg1) {
  arg1.target.className = 'pixel ' + selected;
})