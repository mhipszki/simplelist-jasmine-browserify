'use strict';

var Observable = require('../source/observable');

describe('observable', function () {

  var observable;

  describe('calling add() method', function () {

    var observer;

    beforeEach(function() {
      observable = new Observable();

      spyOn(observable, 'add').and.callThrough();

      observer = {};
      observable.add(observer);
    });

    it('should register a new observer', function() {
      expect(observable.add).toBeDefined();
      expect(observable.add).toHaveBeenCalledWith(observer);
      expect(observable.get(0)).toBe(observer);
    });

  });

  describe('calling notify() method', function () {

    var observer1;
    var observer2;
    var context;

    beforeEach(function() {
      observer1 = { update: function() {} };
      observer2 = { update: function() {} };
      context = { data: 1234 };

      spyOn(observer1, 'update');
      spyOn(observer2, 'update');

      observable = new Observable();
      observable.add(observer1);
      observable.add(observer2);
      observable.notify(context);
    });

    it('should call all observers update() method with a given context', function() {
      expect(observer1.update).toHaveBeenCalledWith(context);
      expect(observer2.update).toHaveBeenCalledWith(context);
    });

  });

});
