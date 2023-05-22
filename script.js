let add_button = document.getElementById('add-book');
add_button.addEventListener('click', function(e) {
    e.preventDefault();
    if (checkValidity()) {
        add_book();
    }
});
alert(read.value);

function checkValidity() {
    const arr = [title, author, pages, desc];
    for (const val of arr) {
        if (val.value == '') val.classList.add('invalid');
        else val.classList.remove('invalid');
    }
    return title.value != '' && author.value != '' && pages.value != '' && desc.value != '';
}

function add_book(e) {
    let table = document.getElementById('table');
    let row = document.createElement('tr');
    table.append(row);
    const arr = [title, author, desc, pages];
    for (const val of arr) {
        let td = document.createElement('td');
        td.textContent = val.value;
        row.append(td);
    }
    
}