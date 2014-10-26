'use strict';

function createWidget() {
  var input = document.createElement('input');
  input.id = 'item-name';
  input.type = 'text';

  var addButton = document.createElement('button');
  addButton.id = 'add-button';
  addButton.innerHTML = 'Add';

  var itemList = document.createElement('ul');
  itemList.id = 'item-list';

  var itemCount = document.createElement('div');
  itemCount.id = 'item-count';
  itemCount.innerHTML = 'No items in list';

  var container = document.createElement('div');
  container.id = 'container';
  container.appendChild(input);
  container.appendChild(addButton);
  container.appendChild(itemList);
  container.appendChild(itemCount);

  document.body.appendChild(container);
}

createWidget();
