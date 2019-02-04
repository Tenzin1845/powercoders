

function domContentLoaded() {
  const inputbox = document.getElementById('item');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const clearAll = document.getElementById('deleteAll');
  const quantity = document.getElementById('quantity');
  clearAll.disabled = true;


  addItemButton.addEventListener('click', function () {
    const trimmedValue = inputbox.value.trim();
    const quantity = document.getElementById('quantity');
    if (trimmedValue === '') {
      return;
    }
    const item = new ShoppingListItem(trimmedValue,quantity.value.trim());
    shoppingList.appendChild(item.toListItem());

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
    inputbox.focus();
  });

  inputbox.addEventListener('keyup', function () {
    const trimmedValue = inputbox.value.trim();
    const quantity = document.getElementById('quantity');
    addItemButton.disabled = trimmedValue === '';
    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }
    const item = new ShoppingListItem(trimmedValue,quantity.value.trim());
    shoppingList.appendChild(item.toListItem());
    inputbox.value = '';
    quantity.value = '';
    addItemButton.disabled = true;
    clearAll.disabled = false;

  });

  quantity.addEventListener('keyup', function () {
    const trimmedValue = inputbox.value.trim();
    const quantity = document.getElementById('quantity');
    addItemButton.disabled = trimmedValue === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue,quantity.value.trim());
    shoppingList.appendChild(item.toListItem());

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
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  domContentLoaded();

}


