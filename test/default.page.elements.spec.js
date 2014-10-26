'use strict';

var Widget = require('./widget');

describe('simple list app', function () {

  var widget;

  beforeEach(function() {
    widget = new Widget();
  });

  it('should have a container element', function() {
    expect(widget.container.id).toBe('container');
  });

  it('should have an input field', function() {
    expect(widget.input.id).toBe('item-name');
  });

  it('should have an Add button', function() {
    expect(widget.addButton.id).toBe('add-button');
  });

  it('should have an element to show the items added', function() {
    expect(widget.itemList.id).toBe('item-list');
  });

  it('should have an element to show the number of items', function() {
    expect(widget.itemCount.id).toBe('item-count');
  });

});
