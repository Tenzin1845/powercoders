function addItem(itemName) {
  let li = document.createElement('li');
  let span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);
  let button = document.createElement('button');
  button.innerText = 'delete';

  button.addEventListener('click', function (event) {
    console.log('delete button clicked: ' + itemName);
    li.remove();
  });

  li.appendChild(button);

  return li;

}

    document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('button').addEventListener('click', function (event) {


    console.log('The button was clicked');
    let el = document.getElementById('item');
    console.log(el.value);
    let li = document.createElement('li');
    li = addItem(el.value);
    let ul = document.querySelector('ul');

    ul.appendChild(li);


    });

      document.querySelector('input').addEventListener('keyup', function (event) {
        if(event.key === 'Enter'){
          console.log(event.key);
        }
      });

});
