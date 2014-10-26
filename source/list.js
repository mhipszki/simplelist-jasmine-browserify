'use strict';

var Controller = require('./controller');

function List() {

  var noItemsInList = 'No items in list';

  var input = this.input = document.createElement('input');
  input.id = 'item-name';
  input.type = 'text';

  var addButton = this.addButton = document.createElement('button');
  addButton.id = 'add-button';
  addButton.innerHTML = 'Add';

  var itemList = this.itemList = document.createElement('ul');
  itemList.id = 'item-list';

  var itemCount = this.itemCount = document.createElement('div');
  itemCount.id = 'item-count';
  itemCount.innerHTML = noItemsInList;

  var widget = this.container = document.createElement('div');
  widget.id = 'container';
  widget.appendChild(input);
  widget.appendChild(addButton);
  widget.appendChild(itemList);
  widget.appendChild(itemCount);

  var controller = new Controller(itemList);
  controller.addObserver(itemCount);

  addButton.onclick = function() {
    controller.addToList(input.value);
  };

  itemCount.update = function(numOfItems) {
    itemCount.innerHTML = numOfItems > 0 ? numOfItems+' item(s) in list' : noItemsInList;
  };

  this.attachTo = function(parent) {
    parent.appendChild(widget);
  };
}

module.exports = List;
