# EventDispatcher

## JavaScript Exercise: Event Driven Programming

### Purpose:
Gain an architectural understanding of event-driven programming.

### Description:
If you have ever written a click handler or used jQuery on() or trigger() methods, then you have written code that has used an event dispatcher.

In this exercise you will actually write the event dispatcher.

The end solution does not involve a lot of code; however, once you get through the exercise, a key understanding of event driven programming should fall into place for you.

### Warmup:
In case you are not familiar with running JavaScript tests and the workflow for getting them to pass, do the Warm Up exercise first.

### Setup
First Fork this repository on GitHub so you have your own copy.

* install node
* install webpack

### Instructions:
The EventDispatcher is not implemented so the application starts in failing state, and the tests are broken.

Your task is to implement these 2 methods on the EventDispatcher so that the tests pass:

    on(event, handler)
    trigger(event, payload)


### Workflow:

* Install the app
* Launch the app to see what it looks like in its broken state
* Run the tests and see what the failures are
* Write code to implement the EventDispatcher 
* Rerun the tests to make sure they are passing
* Refresh the app to make sure it is no longer broken
* Commit your code and push it back up to your fork on GitHub

### Installation:

    cd event-dispatcher
    npm install
    webpack

### Launch:
This will open up a simple application in the browser.

    npm start

Remember that the app won't work until you complete the exercise and implement the missing EventDispatcher methods.

### Test:
This will open up and run the Tests in your browser:

    npm test


### Code:

    webpack --watch

As you do the warm up exercises and implement the EventDispatcher, refresh the browser to see if the tests are passing.
