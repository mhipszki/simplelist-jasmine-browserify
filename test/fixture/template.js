'use strict';

var template = function () {

  jasmine.getFixtures().fixturesPath = '.';

  loadFixtures('template.html');

  this.container = $('#container');
  this.input = $('#item-name');
  this.addButton = $('#add-button');
  this.itemList = $('#item-list');
  this.itemCount = $('#item-count');

};

module.exports = template;
