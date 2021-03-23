console.log(document);
console.dir(document);

alert('Давайте заполним ваше резюме');
let userName = prompt('Как Тебя зовут ?');
let userSurname = prompt('Какая у тебя фамилия ?');
let userAge = prompt('Сколько тебе лет ?');
let userTelephone = prompt('Ведите Ваш контактный номер : +38......');
let userEmail = prompt('Ведите Ваш Email');
let quality1 = prompt('Введите Ваши качества');
let quality2 = prompt('Введите Ваши качества');
let quality3 = prompt('Введите Ваши качества');
let quality4 = prompt('Введите Ваши качества');


let user_name = document.querySelector('.hero__user_name');
user_name.innerHTML =  'Имя :' + ' ' + userName;
let user_surname = document.querySelector('.hero__user_surname');
user_surname.innerHTML =  'Фамилия :' + ' ' + userSurname;
let user_age = document.querySelector('.hero__user_age');
user_age.innerHTML =  'Возраст :' + ' ' + userAge;
let user_tel = document.querySelector('.hero__user_number');
user_tel.innerHTML =  'Телефон :' + ' ' + userTelephone;
let user_email = document.querySelector('.hero__user_email_text');
user_email.innerHTML =  'Email :' + ' ' + userEmail;
let qualityList1 = document.querySelector('.content_qualitylist-text1')
qualityList1.innerHTML = '-' + ' ' + quality1;
let qualityList2 = document.querySelector('.content_qualitylist-text2')
qualityList2.innerHTML = '-' + ' ' + quality2;
let qualityList3 = document.querySelector('.content_qualitylist-text3')
qualityList3.innerHTML = '-' + ' ' + quality3;
let qualityList4 = document.querySelector('.content_qualitylist-text4')
qualityList4.innerHTML = '-' + ' ' + quality4;








