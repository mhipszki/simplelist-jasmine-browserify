'use strict';

var Widget = require('./widget');

describe('simple list app', function () {

  var widget;

  beforeEach(function() {
    widget = new Widget();
    widget.input.value = 'new item';
    widget.addButton.onclick();
    var deleteButton = widget.itemList.children[0].children[0];
    deleteButton.onclick();
  });

  describe('when the user click on the Delete button of an item', function () {

    it('should remove the item from the list', function() {
      expect(widget.itemList.children.length).toBe(0);
    });

    it('should update the list count', function() {
      expect(widget.itemCount.innerHTML).toBe('No items in list');
    });

  });

});
