'use strict';

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
