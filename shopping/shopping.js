/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemName name of the item to add to the list
 * @returns {HTMLElement} li element
 */

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



  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputbox.value.trim();

    if (trimmedValue === '') {
      return;
    }
    shoppingList.appendChild(addItem(trimmedValue));
      inputbox.value = '';
      addItemButton.disabled = true;
      inputbox.focus();

  });

  inputbox.addEventListener('keyup', function (event) {
    const trimmedValue = inputbox.value.trim();
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }

      if (event.key !== 'Enter') {
        return;
      }


    shoppingList.appendChild(addItem(trimmedValue));
  inputbox.value = '';
  addItemButton.disabled = true;

  });

  inputbox.focus();
  addItemButton.disabled = true;
});


