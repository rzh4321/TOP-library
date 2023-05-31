let id = 0;

let add_button = document.getElementById('add-book');
add_button.addEventListener('click', function(e) {
    if (form.checkValidity()) {
        add_book();
    }
});

const inputs = [title, author, pages];

for (let inp of inputs) {
    inp.addEventListener('input', (e) => {
        checkValidity(inp);
    })
}

function checkValidity(inp) {
    const error_message = inp.nextElementSibling;
    error_message.style.width = inp.getBoundingClientRect().width + 'px';
    if (inp.validity.valueMissing) {
        error_message.textContent = "This field is required";
        error_message.classList.add('active');
        inp.classList.add('invalid');
    }
    else if (inp.validity.tooLong) {
        error_message.textContent = "Cannot exceed";
        error_message.classList.add('active');
        inp.classList.add('invalid');
    }
    else if (inp.validity.tooShort) {
        error_message.textContent = "Title cannot be shorter than ";
        error_message.classList.add('active');
        inp.classList.add('invalid');
    }
    else if (inp.validity.rangeOverflow) {
        error_message.textContent = "Cannot exceed 10000";
        error_message.classList.add('active');
        inp.classList.add('invalid');
    }
    else if (inp.validity.rangeUnderflow) {
        error_message.textContent = "Cannot be less than 1";
        error_message.classList.add('active');
        inp.classList.add('invalid');
    }
    else {
        error_message.textContent = "";
        error_message.classList.remove('active');
        inp.classList.remove('invalid');
    }
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

function remove_book(id) {
    let row = document.getElementById(id);
    row.remove();
}

function add_book(e) {
    id += 1;
    let table = document.getElementById('table');
    let row = document.createElement('tr');
    row.id = id;
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

    let remove_btn = document.createElement('button');
    remove_btn.textContent = 'REMOVE BOOK';
    remove_btn.addEventListener('click', (e) => remove_book(id));

    row.append(remove_btn);
}