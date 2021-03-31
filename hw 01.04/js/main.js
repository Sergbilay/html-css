let doc = document;
let objectsEl = doc.querySelector('.container');

//Масив с обектами
let els = [
    { tag: 'div', width: '150px', height: '150px', background: 'green' },
    { tag: 'p', width: '100px', height: '100px', background: 'red' },
    { tag: 'h1', width: '200px', height: '150px', background: 'blue' },
    { tag: 'h2', width: '250px', height: '250px', background: 'tomato' },
];

//Цикл  
for (let i = 0; i < els.length; i++) {
    let elsEl = els[i];

    object =
        '<' + elsEl.tag + ' class="object"' +
        'style="' +
        'height: ' + elsEl.height + ' ;' +
        'width: ' + elsEl.width + ' ;' +
        'background: ' + elsEl.background + ' ;"' +
        '>' +
        '</' + elsEl.tag + '>';

        objectsEl.innerHTML += object;
}










