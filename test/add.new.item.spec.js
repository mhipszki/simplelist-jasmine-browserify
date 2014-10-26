'use strict';

var Widget = require('./widget');

describe('simple list app', function () {

  var widget;

  beforeEach(function() {
    widget = new Widget();
  });

  describe('when the user first opens the page', function () {

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

});
