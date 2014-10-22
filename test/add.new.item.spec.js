'use strict';

jasmine.getFixtures().fixturesPath = 'test/fixture';

describe('simple list app', function() {

  var container;
  var input;
  var addButton;
  var itemList;
  var itemCount;

  beforeEach(function() {
    loadFixtures('container.html');

    container = $('#container');
    input = $('#item-name');
    addButton = $('#add-button');
    itemList = $('#item-list');
    itemCount = $('#item-count');
  });

  describe('when the user first opens the page', function () {

    it('should show an empty input field', function() {
      expect(input).toBeEmpty();
    });

    it('should show an Add button', function() {
      expect(addButton).toExist();
    });

    it('should show no items in the list', function() {
      expect(itemList).toBeEmpty();
    });

    it('should show zero as the number of items added', function() {
      expect(itemCount).toHaveText('No items in list');
    });

  });

});
