'use strict';

var Controller = require('./controller');

var noItemsInList = 'No items in list';

/*
NOTE: List functionality
      * creates a widget (DOM elements) using document.createElement()
        so there's no need to add HTML templates to the page manually
      * a List instance needs a parent element, which it can attache itself to
      * the widget elements are accessed by their reference only
*/
function List() {

  /*
  NOTE: this "double" assignment is just a shorter syntax, because
        element references must be accessed in event handlers
        as well as they need to be exposed for testing purposes
  */
  var input = this.input = createInputFieldElement();
  var addButton = this.addButton = createButtonElement('Add');
  var itemList = this.itemList = createItemListElement();
  var itemCount = this.itemCount = createItemCountElement();
  var widget = this.container = createContainerElement();

  widget.appendChild(input);
  widget.appendChild(addButton);
  widget.appendChild(itemList);
  widget.appendChild(itemCount);

  /*
  NOTE: list items` data is stored in a Controller instance
        which is also responsible to notify subscribed observers
        when the list has been changed
  */
  var controller = new Controller();
  controller.addObserver(itemCount);

  /*
  NOTE: when a user clicks on the Add button
        * a new list item must be created in the DOM
          with a Delete button and the input text
        * the Delete button must remove the item it is bound to
          from the DOM and from the Controller's data store
        * the widget elements are bound to the button's onclick
          as it forms a closure
  */
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

  /*
  NOTE: this is the Update() method of the sole observer: the Item Count element
        the Controller will notify the observer by calling its Update() method
  */
  itemCount.update = function(numOfItems) {
    itemCount.innerHTML = numOfItems > 0 ? numOfItems+' item(s) in list' : noItemsInList;
  };

  /*
  NOTE: this method is called after instantiating a new List object
        to attach the widget to a parent element
  */
  this.attachTo = function(parent) {
    parent.appendChild(widget);
  };
}

/* DOM element generators */

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
