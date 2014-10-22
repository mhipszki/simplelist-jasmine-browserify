'use strict';

var Template = require('./fixture/template');

describe('simple list app', function () {

  var template;

  beforeEach(function() {
    template = new Template();
  });

  it('should have a container element', function() {
    expect(template.container).toHaveId('container');
  });

  it('should have an input field', function() {
    expect(template.input).toHaveId('item-name');
  });

  it('should have an Add button', function() {
    expect(template.addButton).toHaveId('add-button');
  });

  it('should have an element to show the items added', function() {
    expect(template.itemList).toHaveId('item-list');
  });

  it('should have an element to show the number of items', function() {
    expect(template.itemCount).toHaveId('item-count');
  });

});
