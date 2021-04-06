
let doc = document;
let box = doc.querySelector('.box');
console.log(box);

let squareBase = [
    {
        strukture: {
            tag: 'div',
            class: 'square-item',
            id: 'square1'
        },
        styles: {
            height: '150px',
            width: '150px',
            background: 'tomato',
            marginLeft: '30px',
            border: '2px solid grey',
            padding: '150px',
        }
    },
    {
        strukture: {
            tag: 'div',
            class: 'square-item',
            id: 'square1'
        },
        styles: {
            height: '100px',
            width: '200px',
            background: 'red',
            margin: '25px',
            border: '2px solid grey',
        }
    }
];

for (let i = 0; i < squareBase.length; i++) {
    let styles = '';
    for (let key in squareBase[i].styles) {
        if (key !== 'strukture')
            styles += `${key}:${squareBase[i].styles[key]};`;
    }
    square =
        `
            <${squareBase[i].strukture.tag}
            class="${squareBase[i].strukture.class}"
            id="${squareBase[i].strukture.id}"
                style="${styles}">
            </${squareBase[i].strukture.tag}>
        `
    box.innerHTML += square;
}
