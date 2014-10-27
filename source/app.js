'use strict';

var List = require('./list');

/*
NOTE: * any number of List instances can be attached to a single DOM element
      * their widgets will be attached to that parent element
      * the instances work completely independent from each other
*/
var element = document.createElement('div');
element.id = 'lists';
document.body.appendChild(element);

var list = new List();
list.attachTo(element);

list = new List();
list.attachTo(element);

list = new List();
list.attachTo(element);
