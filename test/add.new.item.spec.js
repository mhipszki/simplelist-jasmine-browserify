'use strict';

var Widget = require('./widget');

describe('simple list app', function () {

  var widget;

  describe('when the user first opens the page', function () {

    beforeEach(function() {
      widget = new Widget();
    });

    it('should show an empty input field', function() {
      expect(widget.input.value).toBe('');
    });

    it('should show an Add button', function() {
      expect(widget.addButton.innerHTML).toBe('Add');
    });

    it('should show no items in the list', function() {
      expect(widget.itemList.innerHTML).toBe('');
    });

    it('should show zero as the number of items added', function() {
      expect(widget.itemCount.innerHTML).toBe('No items in list');
    });

  });

  describe('when the user click on the Add button', function () {

    beforeEach(function() {
      widget = new Widget();
      widget.input.value = 'new item';
      widget.addButton.onclick();
    });

    it('should add the input value as a new item to the list', function() {
      expect(widget.itemList.innerHTML).toBe('<li><button>Delete</button><span>new item</span></li>');
    });

    it('should update the list count', function() {
      expect(widget.itemCount.innerHTML).toBe('1 item(s) in list');
    });

  });

});
