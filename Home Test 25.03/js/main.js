// array, object, function

// let num = [1, 2, 3, 4];
// console.log(num);

// let citys = ['Poltava', 'Kiev'];
// console.log(citys);

// let user = ['Dima', 39, 'City', false]
// console.log(user);

// console.log(user[0]);
// console.log(user[1]);

let qst1 = ['Столица Украины?', 'Киев'];
let qst2 = ['Количество планет в солнечной системе ?' + '  ' + '(введите цифрой)', 8];
let qst3 = ['В каком году принята конституция Украины?' + '  ' + 'Укажите год', 1996];
let qst4 = ['3 * 3 =  ?', 9];
let qst5 = ['Netscape это компания которая создала JavaScript?' + '  ' + 'введите Да или Нет', 'Да'];

let testsCount = 5;
let res = 0;

question(qst1);
question(qst2);
question(qst3);
question(qst4);
question(qst5);

let theTotal = alert('Вы ответили на ' + res + '/' + testsCount);

let questions__qst1 = document.querySelector('.questions__qst1');
questions__qst1.innerHTML = qst1[0] + ' ' + '  Правильный ответ:  ' + qst1[1];
let questions__qst2 = document.querySelector('.questions__qst2');
questions__qst2.innerHTML = qst2[0] + ' ' + '  Правильный ответ:  ' + qst2[1];
let questions__qst3 = document.querySelector('.questions__qst3');
questions__qst3.innerHTML = qst3[0] + ' ' + '  Правильный ответ:  ' + qst3[1];
let questions__qst4 = document.querySelector('.questions__qst4');
questions__qst4.innerHTML = qst4[0] + ' ' + '  Правильный ответ:  ' + qst4[1];
let questions__qst5 = document.querySelector('.questions__qst5');
questions__qst5.innerHTML = qst5[0] + ' ' + '  Правильный ответ:  ' + qst5[1];



// блок функций
function question(qst) {
    let userAnswer = prompt(qst[0]);
    if (userAnswer == qst[1]) {
        res++;
        alert('Правильно');
    } else {
        alert('Неправильно');
    }
}
