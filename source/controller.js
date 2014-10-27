'use strict';

var Observable = require('./observable');

/*
NOTE: Controller has two purposes
      * stores the list items in a simple JS array
      * provides the ability to observers to subscribe to change events (add/remove) of the list
*/

function Controller() {
  var items = [];
  var observable = new Observable();

  function addObserver(observer) {
    observable.add(observer);
  }

  function addToList(input) {
    var item = {
      text: input
    };

    items.push(item);
    observable.notify(items.length);

    return item;
  }

  function removeFromList(item) {
    items.splice(items.indexOf(item), 1);
    observable.notify(items.length);
  }

  this.addObserver = addObserver;
  this.addToList = addToList;
  this.removeFromList = removeFromList;
}

module.exports = Controller;

