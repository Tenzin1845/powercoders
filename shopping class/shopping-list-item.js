
class ShoppingListItem {

  /**
   *
   * @param {string} name
   * @param {string} quantity
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  toListItem (){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = this.name;
    li.appendChild(span);



    if (this.quantity !== '') {
      const quantitySpan = document.createElement('span');
      quantitySpan.innerText = `(${this.quantity})`;
      li.appendChild(quantitySpan);
    }


    const button = document.createElement('button');
    button.className = 'delete';
    li.appendChild(button);

    button.addEventListener('click', function () {
      li.remove();


      document.getElementById('item').focus();

      document.querySelector('button#deleteAll').disabled =
          document.querySelectorAll('li').length === 0;

    });

    li.appendChild(button);
    return li;

  }

}
