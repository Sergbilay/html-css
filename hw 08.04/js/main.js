let doc = document;
let btnNext = doc.querySelector('.next');
let btnPrev = doc.querySelector('.prev');
let box = doc.querySelector('.box');

let boxCount = 0;

btnNext.onclick = function() {
    boxCount++;
    if (boxCount > 3) {
        boxCount = 0;
    }
    if (boxCount === 0) {
        box.className = 'box';
    }
    if (boxCount === 1) {
        box.className = 'box b1';
    }
    if (boxCount === 2) {
        box.className = 'box b2';
    }
    if (boxCount === 3) {
        box.className = 'box b3';
    }

    console.log(boxCount);
}
btnPrev.onclick = function() {
    boxCount--;
    if (boxCount < 0) {
        boxCount = 3;
    }
    if (boxCount === 0) {
        box.className = 'box';
    }
    if (boxCount === 1) {
        box.className = 'box b1';
    }
    if (boxCount === 2) {
        box.className = 'box b2';
    }
    if (boxCount === 3) {
        box.className = 'box b3';
    }

    console.log(boxCount);
}


