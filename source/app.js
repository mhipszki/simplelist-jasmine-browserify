'use strict';

var List = require('./list');

var element = document.createElement('div');
element.id = 'lists';
document.body.appendChild(element);

var list = new List();
list.attachTo(element);

list = new List();
list.attachTo(element);

list = new List();
list.attachTo(element);
