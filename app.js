let addExButton = document.querySelector('.btn');
let deleteBtn = document.createElement('button');

function addExpense() {
    //add name
    let tableEl = document.querySelector('.myTable')
    let myInputname = document.getElementById('name').value;
    let tableR = document.createElement('tr');
    let td = document.createElement('td');

    td.innerHTML = myInputname;
    //create new row
    tableEl.appendChild(tableR)
    tableR.appendChild(td);


    //add date

    let date = document.getElementById('date').value;
    td = document.createElement('td');
    td.innerHTML = date;
    tableR.appendChild(td);

    //add amount
    let amount = document.getElementById('amount').value;
    td = document.createElement('td');
    td.innerHTML = amount;
    tableR.appendChild(td);

    //add delete button
    let deleteBtn = document.createElement('button');
    tableR.appendChild(deleteBtn)
    deleteBtn.innerHTML = 'X';
    deleteBtn.setAttribute('class', 'btn deleteBtn');

    deleteBtn.addEventListener('click', function () {
        tableR.remove()
    }
    )
}

addExButton.onclick = addExpense;

