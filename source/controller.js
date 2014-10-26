'use strict';

var Observable = require('./observable');

function Controller(itemList) {
  var items = [];
  var observable = new Observable();

  function addObserver(observer) {
    observable.add(observer);
  }

  function createDeleteButton() {
    var button = document.createElement('button');
    button.innerHTML = 'Delete';
    return button;
  }

  function createItemTextFrom(input) {
    var text = document.createElement('span');
    text.innerHTML = input;
    return text;
  }

  function createItemFrom(button, text) {
    var li = document.createElement('li');
    li.appendChild(button);
    li.appendChild(text);
    return li;
  }

  function addToList(input) {
    var button = createDeleteButton();
    var text = createItemTextFrom(input);
    var li = createItemFrom(button, text);

    button.onclick = function() {
      removeFromList(item);
    };

    var item = {
      text: input,
      element: li
    };

    itemList.appendChild(li);
    items.push(item);
    observable.notify(items.length);
  }

  function removeFromList(item) {
    itemList.removeChild(item.element);
    items.splice(items.indexOf(item), 1);
    observable.notify(items.length);
  }

  this.addObserver = addObserver;
  this.addToList = addToList;
  this.removeFromList = removeFromList;
}

module.exports = Controller;

