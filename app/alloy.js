// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
//quick and dirty global event emitter
Alloy.Globals.events = _.extend ({}, Backbone.Events);
//A global object which emits events when a property is set
var MyModel = require ('MyModel');
var myModel = new MyModel();
//A globally accessible event handler
/**
 * A global event handler 
 * @param {Object} e
 */
function eventHandler (e) {
    //we also calculate execution time
	Ti.API.info ('Event handler foo:'+ e.foo+', from:'+e.from+', time: '+ (new Date().getTime()-e.start));
	if (e.doSomething === '') {
		return;
	}
	try {
		// try catch to handle the exception thrown when dealing with an object method on Ti.App under iOS
		e.doSomething();
	}
	catch (e) {
		Ti.API.error (JSON.stringify (e));
	}
	Ti.API.info ('After execution time: '+ (new Date().getTime() - e.start));
}
