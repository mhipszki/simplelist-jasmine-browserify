#Simple List App example project

This project is intended to show developing a simple dynamic list feature using test-first approach and vanilla Javascript.

##Expected functionality

* a user inputs an item into a text field, which is then added to the list on clicking ‘Add’ button
* a user can delete an item from the list by clicking ‘Delete’ button beside the item
* the count updates depending on how many items are in the list

##Constraints

* Use of observer pattern (or similar).
* Counting of DOM elements to find out the number of items in the list isn’t acceptable. Information relating to the current list should be stored in a JS object or local storage, for example.
* Browser support is latest Chrome or Firefox.
* Use native JS DOM over libraries where possible and practical.
* No full MVC libraries to be used (e.g. backbone, knockout)
* CSS and JavaScript must be external files.

##Used tools

* Jasmine (writing BDD tests)
* jasmine-jquery (helping DOM access in unit tests)
* PhantomJS (headless browser to run Jasmine unit tests)
* JSHint (linting Javascript code)
* Grunt (automated tasks to aid development)

