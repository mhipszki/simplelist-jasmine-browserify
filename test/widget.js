'use strict';

function getBy(id) {
  return document.getElementById(id);
}

function Widget() {
  this.container = getBy('container');
  this.input = getBy('item-name');
  this.addButton = getBy('add-button');
  this.itemList = getBy('item-list');
  this.itemCount = getBy('item-count');
}

module.exports = Widget;
