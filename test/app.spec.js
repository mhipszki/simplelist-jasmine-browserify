'use strict';

describe('simple list app', function () {

  var elem;

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'test/fixture';
    loadFixtures('container.html');
    elem = $('#container');
  });

  it('should have a container element', function() {
    expect(elem).toHaveId('container');
  });

});
