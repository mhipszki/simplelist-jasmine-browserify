'use strict';

/*
NOTE: Observable is a simple implementation of the Observer pattern
      * it registers observers and
      * notifies them through their exposed Update() method
        with a given context
*/

function Observable() {
  this.observers = [];
}

Observable.prototype.add = function(observer) {
  this.observers.push(observer);
};

Observable.prototype.get = function(index) {
  return this.observers[index];
};

Observable.prototype.notify = function(context) {
  this.observers.forEach(function(observer){
    observer.update(context);
  });
};

module.exports = Observable;
