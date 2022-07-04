const ulPixelBoard = window.document.querySelector('ul#pixel-board');
for (let indice = 1; indice <= 25; indice += 1) {
  const itemLi = window.document.createElement('li');
  itemLi.className = 'pixel white';
  ulPixelBoard.appendChild(itemLi);
};
