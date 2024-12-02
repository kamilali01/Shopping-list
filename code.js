// Butonları seç
const addButton = document.getElementById('addButton');
const input = document.querySelector('input');
const list = document.getElementById('list');


addButton.addEventListener("click", myFunction);

function myFunction() {

    const text = input.value;
    input.value = '';

    const newItem = document.createElement('li');
    const itemText = document.createElement('span');
    const deleteButton = document.createElement('button');
  
    itemText.textContent = text;

    newItem.appendChild(itemText);
    newItem.appendChild(deleteButton);

    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener("click", deleteFunction);

function deleteFunction() {
    list.removeChild(newItem);

    }

    list.appendChild(newItem);

    input.focus();



}



