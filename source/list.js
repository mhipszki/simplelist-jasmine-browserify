'use strict';

var Controller = require('./controller');

var noItemsInList = 'No items in list';

function List() {

  var input = this.input = createInputFieldElement();
  var addButton = this.addButton = createButtonElement('Add');
  var itemList = this.itemList = createItemListElement();
  var itemCount = this.itemCount = createItemCountElement();
  var widget = this.container = createContainerElement();

  widget.appendChild(input);
  widget.appendChild(addButton);
  widget.appendChild(itemList);
  widget.appendChild(itemCount);

  var controller = new Controller(itemList);
  controller.addObserver(itemCount);

  addButton.onclick = function() {
    var button = createButtonElement('Delete');
    var text = createTextElementFrom(input.value);
    var li = createListElementFrom(button, text);

    var item = controller.addToList(input.value);

    itemList.appendChild(li);

    input.value = '';

    button.onclick = function() {
      itemList.removeChild(li);
      controller.removeFromList(item);
    };
  };

  itemCount.update = function(numOfItems) {
    itemCount.innerHTML = numOfItems > 0 ? numOfItems+' item(s) in list' : noItemsInList;
  };

  this.attachTo = function(parent) {
    parent.appendChild(widget);
  };
}

function createInputFieldElement() {
  var element = createElement('input');
  element.type = 'text';
  return element;
}

function createButtonElement(text) {
  var element = createElement('button');
  element.innerHTML = text;
  return element;
}

function createItemListElement() {
  return createElement('ul');
}

function createItemCountElement() {
  var element = createElement('div');
  element.innerHTML = noItemsInList;
  return element;
}

function createContainerElement() {
  return createElement('div');
}

function createTextElementFrom(input) {
  var element = createElement('span');
  element.innerHTML = input;
  return element;
}

function createListElementFrom(button, text) {
  var element = createElement('li');
  element.appendChild(button);
  element.appendChild(text);
  return element;
}

function createElement(type) {
  return document.createElement(type);
}

module.exports = List;
