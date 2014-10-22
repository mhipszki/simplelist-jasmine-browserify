'use strict';

jasmine.getFixtures().fixturesPath = 'test/fixture';

describe('simple list app', function () {

  var container;

  beforeEach(function() {
    loadFixtures('container.html');
    container = $('#container');
  });

  it('should have a container element', function() {
    expect(container).toHaveId('container');
  });

});
