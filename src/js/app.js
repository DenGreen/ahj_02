let position = null;
let element = null;
let previousElement = null;

const collection = document.querySelectorAll('.field_li');

 function random() {
    let randomCell = Math.floor((Math.random() * (collection.length - 1 + 1)) + 1);
    if(position === randomCell) {
        random();
    } else {
        position = randomCell;
        element = collection[position - 1];
        if(previousElement !== null) previousElement.removeChild(previousElement.lastElementChild); // previousElement.innerHTML = '';
        element.insertAdjacentHTML('beforeend', '<img src="https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true">');
        previousElement = element;
    }
 }

let int = setInterval(random, 1000); 