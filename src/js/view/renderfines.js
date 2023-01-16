const list=document.querySelector('.finest-list')

export function renderFines({id,amount,description,date,deadLine,paid}) {
    const item = document.createEvent('li');
    item.innerHTML=`<li class="card" style="width: 18rem;" data-id=`${id}`>
        '        <div class="card-body">
        '          <h5 class="card-title">${amount}</h5>'
        '          <p class="card-text">${description}</p>'
        '        </div>' 
        '        <ul class="list-group list-group-flush">' 
        '          <li class="list-group-item">${data}</li>' 
        '          <li class="list-group-item">${deadLine}</li>' 
        '          <li class="list-group-item">${paid}</li>' 
        '        </ul>\
        '        <div class="card-body">
        '          <a href="#" class="card-link">Card link</a>\
        '          <a href="#" class="card-link">Another link</a>
        '        </div>\n'
        '      </li>`;
            list.append(item)
}