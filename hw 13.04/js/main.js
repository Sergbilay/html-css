let doc = document;
let btnCall = doc.querySelector('.btn-call');
let form = doc.querySelector('.form');
let btnClose = doc.querySelector('.form__close-btn');
let formContent = doc.querySelector('.form-content');

let show = false;

btnCall.onclick = function () {
    if (show === false) {
        form.className = 'form active';
        formContent.className = 'form-content active';
        
        // скрывать кнопку при нажатии 
        // btnCall.className = 'btn-call noactive';
        show = true;
    }
    else {
        form.className = 'form';
        formContent.className = 'form-content';
        show = false;
    }
}
btnClose.onclick = function () {
    form.className = 'form';
    formContent.className = 'form-content';
}