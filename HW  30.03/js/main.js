let doc = document;
console.log(doc);

let data1 = ['Киев', 'Полтава', 'Чернигов', 'Сумы'];
let data2 = ['Красный', 'Белый', 'Синий'];
let data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data4 = ['Великотырновская', 29, 'Соборности', 66, 'Европейская', 66];
let data5 = ['Javascript'];

alert('Масивы для вывода: data1, data2, data3, data4, data5');
alert('Есть следующие блоки для вставки: block1, block2, block3, block4, block5   ');

renderData(data1);
renderData(data2);
renderData(data3);
renderData(data4);
renderData(data5);


function renderData(data) {
    let parrentEl1 = prompt('Введите блок для вставки');
    let tagEl = prompt('Выберите имя тега из : <h1>, <h2>, <p>, <h3>   и  введите');
    if (parrentEl1 == 'block1') {
        let blockEl = doc.querySelector('.block1');
        for (let i = 0; i < data.length; i++) {
            blockEl.innerHTML += tagEl + data[i];
        }
    }
    else if (parrentEl1 == 'block2') {
        let blockEl = doc.querySelector('.block2');
        for (let i = 0; i < data.length; i++) {
            blockEl.innerHTML += tagEl + data[i];
        }

    }
    else if (parrentEl1 == 'block3') {
        let blockEl = doc.querySelector('.block3');
        for (let i = 0; i < data.length; i++) {
            blockEl.innerHTML += tagEl + data[i];
        }
    }
    else if (parrentEl1 == 'block4') {
        let blockEl = doc.querySelector('.block4');
        for (let i = 0; i < data.length; i++) {
            blockEl.innerHTML += tagEl + data[i];
        }
    }
    else if (parrentEl1 == 'block5') {
        let blockEl = doc.querySelector('.block5');
        for (let i = 0; i < data.length; i++) {
            blockEl.innerHTML += tagEl + data[i];
        }
    }

}




