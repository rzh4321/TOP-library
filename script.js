let add_button = document.getElementById('add-book');
add_button.addEventListener('click', function(e) {
    if (checkValidity()) {
        add_book();
    }
});

function checkValidity() {
    const arr = [title, author, pages, desc];
    for (const val of arr) {
        if (val.value == '') val.classList.add('invalid');
        else val.classList.remove('invalid');
    }
    return title.value != '' && author.value != '' && pages.value != '' && desc.value != '';
}

function switchRead(elem) {
    if (elem.classList.contains('on')) {
        elem.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>`; 
    }
    else {
        elem.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5' /></svg>"
    }
    elem.classList.toggle('on')
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
    
    let td2 = document.createElement('td');
    td2.id = 'read-cell';
    if (read.checked) {
        td2.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'><path stroke-linecap='round' stroke-linejoin='round' d='M4.5 12.75l6 6 9-13.5' /></svg>" 
        td2.classList.add('on');
    }
    else {
        td2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>`; 
    }
    td2.addEventListener('click', function(e) {
        switchRead(td2);
    });
    row.append(td2);
}