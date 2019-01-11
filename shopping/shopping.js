function addItem(itemName) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);
  const button = document.createElement('button');
  button.innerText = 'delete';

  button.addEventListener('click', function (event) {
    li.remove();
    document.getElementById('item').focus();

  });

  li.appendChild(button);
  return li;

}

document.addEventListener('DOMContentLoaded', function (event) {
  const inputbox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  document.querySelector('button').addEventListener('click', function (event) {
    if (inputbox.value.trim() !== '') {

      shoppingList.appendChild(addItem(inputbox.value.trim()));
      inputbox.value = '';
      addItemButton.disabled = true;

    }

    inputbox.focus();

  });

  inputbox.addEventListener('keyup', function (event) {
    if (inputbox.value.trim() !== '') {
      addItemButton.disabled = false;
      if (event.key === 'Enter') {

        shoppingList.appendChild(addItem(inputbox.value.trim()));
        inputbox.value = '';
      }
    }
    if(inputbox.value.trim() === ''){
      addItemButton.disabled = true;
    }

  });
  inputbox.focus();
  addItemButton.disabled = true;
});

