/**
 * Creates and returns an 'li' element for inclusion in the shopping list.
 *
 * @param {string} itemName name of the item to add to the list
 * @returns {HTMLElement} li element
 */

function addItem(itemName, quantity) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);



  if (quantity !== '') {
    const quantitySpan = document.createElement('span');
    quantitySpan.innerText = '(' + quantity + ')';
    li.appendChild(quantitySpan);
  }


  const button = document.createElement('button');
  button.className = 'delete';
  li.appendChild(button);

  button.addEventListener('click', function (event) {
    li.remove();


    document.getElementById('item').focus();

    document.querySelector('button#deleteAll').disabled =
        document.querySelectorAll('li').length === 0;

  });

  li.appendChild(button);
  return li;

}

function domContentLoaded() {
  const inputbox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const clearAll = document.getElementById('deleteAll');
  const quantity = document.getElementById('quantity');
  clearAll.disabled = true;


  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputbox.value.trim();
    const quantity = document.getElementById('quantity');
    if (trimmedValue === '') {
      return;
    }
    shoppingList.appendChild(addItem(trimmedValue,quantity.value.trim()));
    inputbox.value = '';
    quantity.value = '';
    addItemButton.disabled = true;
    clearAll.disabled = false;
    inputbox.focus();

  });

  clearAll.addEventListener('click', function () {
    let listItems = document.querySelectorAll('li');
    listItems.forEach(function (el) {
      el.remove();
    });
    clearAll.disabled = true;
    inputBox.focus();
  });

  inputbox.addEventListener('keyup', function (event) {
    const trimmedValue = inputbox.value.trim();
    const quantity = document.getElementById('quantity');
    addItemButton.disabled = trimmedValue === '';
    clearAll.disabled = false;

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }


    shoppingList.appendChild(addItem(trimmedValue, quantity.value.trim()));
    inputbox.value = '';
    quantity.value = '';
    addItemButton.disabled = true;
    clearAll.disabled = false;

  });

  quantity.addEventListener('keyup', function (event) {
    const trimmedValue = inputbox.value.trim();
    const quantity = document.getElementById('quantity');
    addItemButton.disabled = trimmedValue === '';
    clearAll.disabled = false;

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }


    shoppingList.appendChild(addItem(trimmedValue, quantity.value.trim()));
    inputbox.value = '';
    quantity.value = '';
    addItemButton.disabled = true;
    clearAll.disabled = false;

  });

  inputbox.focus();
  addItemButton.disabled = true;
  clearAll.disabled = true;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function (event) {
    domContentLoaded();
  });
} else {
  domContentLoaded();

}


