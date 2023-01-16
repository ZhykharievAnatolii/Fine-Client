const list=document.querySelector('.finest-list')

function renderFines({id,amount,description,date,deadLine,paid}) {
    const item = document.createEvent('li');
    item.innerHTML=``<li class="card" style="width: 18rem;" data-id=`${id}`>
        '        <div class="card-body">\n' +
        '          <h5 class="card-title">${amount}</h5>' +
        '          <p class="card-text">${description}</p>' +
        '        </div>' +
        '        <ul class="list-group list-group-flush">' +
        '          <li class="list-group-item">${data}</li>' +
        '          <li class="list-group-item">A second item</li>' +
        '          <li class="list-group-item">A third item</li>' +
        '        </ul>\n' +
        '        <div class="card-body">\n' +
        '          <a href="#" class="card-link">Card link</a>\n' +
        '          <a href="#" class="card-link">Another link</a>\n' +
        '        </div>\n' +
        '      </li>`;
            list.append(item)
}