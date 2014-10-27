#Simple List App example project

This project is intended to show developing a simple dynamic list feature using test-first approach and vanilla Javascript.

##Expected functionality

* a user inputs an item into a text field, which is then added to the list on clicking ‘Add’ button
* a user can delete an item from the list by clicking ‘Delete’ button beside the item
* the count updates depending on how many items are in the list

##Constraints

* Use of **observer pattern** (or similar).
* **Counting** of DOM elements to find out the number of items in the list isn’t acceptable. Information relating to the current list should be stored in a JS object or local storage, for example.
* Browser support is latest Chrome or Firefox.
* Use **native JS DOM** over libraries where possible and practical.
* No full MVC libraries to be used (e.g. backbone, knockout)
* CSS and JavaScript must be external files.

##Used tools

* Jasmine (writing BDD tests)
* jasmine-jquery (helping DOM access in unit tests)
* PhantomJS (headless browser to run Jasmine unit tests)
* JSHint (linting Javascript code)
* Grunt (automated tasks to aid development)

##User stories

###Adding new items to the list

####Story

> As a User I can enter the name of a new Item and click on the Add button so that the Item will be appended to the list of Items.

####Acceptance criteria

#####Scenario #1

GIVEN I am a User

WHEN I open the page

THEN I see an empty input field with an Add button

AND I see "No items in list" under the form


#####Scenario #2

GIVEN I am a User

WHEN I enter the name of a new Item in the input field

AND I click on the Add button

THEN the Item is added to the end of the list along with a Delete button

AND the text below the list shows the length of the list

###Deleting items from the list

####Story

> As a User I can delete Items from the list so that I can keep only the important items in there

####Acceptance criteria

#####Scenario #1

GIVEN I am User

WHEN I see the list of Items

AND there is at least one Item in the list

AND I click on the Delete button belonging to an Item

THEN the Item is removed from the list

AND the text below the list shows the new length of the list

##Architecture

According to the *Observable design pattern* in this example:

**item list** is the *Observable / Subject*
**list counter** is the *Observer*

The *list counter* should be notified when the *list* changes. We trigger the change by adding / removing an item from the list.

###Adding a new item

The *Add button* should be bound to a method of the *list* to add a new item, and as a result the *list* should store the new item, adds the new item to the DOM and notify the *list counter* to update its text with the changed number of the items.

###Deleting an item

When a new item is added to the list, its *Delete button* should be bound to a method of the *list* to be able to remove itself from the list when the button is clicked. The same process should happen after removing the item: altering the DOM and notifying the *list counter*.

###List

Serves the purpose to create the DOM elements of the widget and bind them to the Controller.

As the List object is working with DOM element references, any number of Lists can be added to a single HTML page, creating a List instance and attaching it to a DOM element.

###Controller

Stores data and contains application logic, uses the Observable object to notify observers when the stored data has been changed.

DOM manipulation is completely decoupled from the Controller's logic.

