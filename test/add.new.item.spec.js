'use strict';

var Template = require('./fixture/template');

describe('simple list app', function() {

  var template;

  beforeEach(function() {
    template = new Template();
  });

  describe('when the user first opens the page', function () {

    it('should show an empty input field', function() {
      expect(template.input).toBeEmpty();
    });

    it('should show an Add button', function() {
      expect(template.addButton).toExist();
    });

    it('should show no items in the list', function() {
      expect(template.itemList).toBeEmpty();
    });

    it('should show zero as the number of items added', function() {
      expect(template.itemCount).toHaveText('No items in list');
    });

  });

});
