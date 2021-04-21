let doc = document;
let box = doc.querySelector('.box');
let formMain = doc.forms.main
let formEls = formMain.elements;

formMain.onsubmit = function (event) {
    event.preventDefault();
    creatHtml(formMain);
}

function creatHtml(dataForm) {
    let parentClassName = dataForm.parent.value;
    let tag = dataForm.tag.value;
    let className = dataForm.class.value;
    let text = dataForm.text.value;
    let parent = doc.querySelector(`.${parentClassName}`)

    parent.innerHTML += 
        `<${tag} class="${className}">
            ${text}
        </${tag}>`
}





