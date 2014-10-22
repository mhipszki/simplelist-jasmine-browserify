'use strict';

jasmine.getFixtures().fixturesPath = 'test/fixture';

describe('simple list app', function () {

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

  it('should have a container element', function() {
    expect(container).toHaveId('container');
  });

  it('should have an input field', function() {
    expect(input).toHaveId('item-name');
  });

  it('should have an Add button', function() {
    expect(addButton).toHaveId('add-button');
  });

  it('should have an element to show the items added', function() {
    expect(itemList).toHaveId('item-list');
  });

  it('should have an element to show the number of items', function() {
    expect(itemCount).toHaveId('item-count');
  });

});
