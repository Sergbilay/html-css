let doc = document;
let container = doc.querySelector('.container');
let active = document.getElementsByClassName('content_active');
let ulElem = doc.createElement('ul');
container.appendChild(ulElem);
ulElem.className = 'list';


let list = [
    {
        title: 'Title1',
        content: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
    },
    {
        title: 'Title2',
        content: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
    },
    {
        title: 'Title3',
        content: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
    }
]

for (let i = 0; i < list.length; i++) {
    let El = list[i];
    listElem =
        '<li class="list__item">' +
        '<h2 class="title">' + El.title + '</h2>' +
        '<p class="content">' + El.content + '</p>'
    '</ul>';
    ulElem.innerHTML += listElem;
}


let listItems = doc.querySelectorAll('.list__item');
for (let i = 0; i < listItems.length; i++) {
    listItems[i].onclick = function() {
        let content = this.querySelector('.content');
        if (active.length > 0 && active[0] !== content) 
        active[0].classList.remove('content_active');
        
       
        content.classList.toggle('content_active');
        }
}
