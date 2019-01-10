function addItem(itemName) {
  let li = document.createElement('li');
  let span = document.createElement('span');
  span.innerText = itemName;
  li.appendChild(span);
  let button = document.createElement('button');
  button.innerText = 'delete';

  button.addEventListener('click', function (event) {
    li.remove();
  });

  li.appendChild(button);

  return li;

}

    document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('button').addEventListener('click', function (event) {
      let inputbox = document.getElementById('item');
      let li = addItem(inputbox.value);
      document.querySelector('ul').appendChild(li);


    });

      document.querySelector('input').addEventListener('keyup', function (event) {
        if(event.key === 'Enter'){
          let inputbox = document.getElementById('item');
          let li = addItem(inputbox.value);
          document.querySelector('ul').appendChild(li);

        }
      });

});
