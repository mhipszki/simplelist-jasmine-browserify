'use strict';

var List = require('../source/list');

function createParent() {
  var id = 'test-widget';
  var element = document.getElementById(id);

  if (!element) {
    element = document.createElement('div');
    element.id = id;
    document.body.appendChild(element);
  }

  return element;
}

function Widget() {
  var parent = createParent();

  var list = new List();

  list.attachTo(parent);

  this.container = list.container;
  this.input = list.input;
  this.addButton = list.addButton;
  this.itemList = list.itemList;
  this.itemCount = list.itemCount;
}

module.exports = Widget;
