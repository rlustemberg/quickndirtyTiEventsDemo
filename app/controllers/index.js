//Setting and event listener for changes on myModel properties
myModel.on ('change', function (e) {Ti.API.info('myModel has changed '+ e.myProp);});

$.index.open();
//changing a property value and triggering an event
myModel.myProp = 6;
/**
 *  Button callbacks
 */
//We fire a Ti.App event with a big object to show how the execution times flies up from <1ms to 50<ms
function triggerAppEventWithData () {
	Ti.App.fireEvent ('app:eventWithData',{start : new Date().getTime(), from : 'Ti.App',foo:$, doSomething: ''});
}
//Here we fire a Ti.App event with a data object containing a method. It should throw an exception wehn attempting to invoke the method on the event handler under iOS.
// The event payload is tiny and so the execution time under 1ms
function triggerAppEventWithMethod () {
	Ti.App.fireEvent ('app:eventWithMethod',{
	start : new Date().getTime(),
	from : 'Ti.App',
	doSomething:function (){
		var end = new Date().getTime();
		//triggering a change event on the global myModel object
		myModel.myProp = 5;
	}});
}
//Here we trigger a Backbone event with a huge object. execution is slightly faster than TiApp event
function triggerBackboneEventWithData () {
	Alloy.Globals.events.trigger ('app:eventWithData', {start : new Date().getTime(), from : 'Backbone' ,foo:$, doSomething: ''});
}
//Here we trigger a Backbone event with a a method
function triggerBackboneEventWithMethod () {
	Alloy.Globals.events.trigger ('app:eventWithMethod', {
	start : new Date().getTime(),
	from : 'Backbone',
	doSomething:function (){
		var end = new Date().getTime();
		myModel.myProp = 6;
	}});

}
//Here we trigger all events. First we trigger all Ti.App, secondly the Backbone events.
// In iOS, due to the native bridging of the proxy object and serialization/deserialization of data, the Backbone events, though triggered last, are executed first
function triggerAll () {
	triggerAppEventWithData ();
	triggerAppEventWithMethod ();
	triggerBackboneEventWithData ();
	triggerBackboneEventWithMethod ();
}

// Here we trigger events with references to proxy objects (a window view)
// the event handler invokes a method on the proxy object to set the backgroundColor property
var ref = {window : $.window1, from: 'Backbone'};
function triggerEventWithReference () {
	
	if(OS_IOS) {
		//no need to test on Android as we know it works
		//on iOS , we will cause an exception
		Alloy.Globals.events.trigger ('app:eventWithReference', ref ); 
	}
	
	Ti.App.fireEvent ('app:eventWithReference', ref );
}
//Will try to use once() method which is unsupported
function triggerEventOnce () {
	Alloy.Globals.events.trigger ('app:eventWithReferenceOnce', ref ); 
}
//Opening windows
function openWindow () {
	$.index.tabs[1].open (Alloy.createController ('window').getView());
	
}
function openWindow2 () {
	$.index.tabs[1].open (Alloy.createController ('window2').getView());
	
}
function openWindow3 () {
	$.index.tabs[1].open (Alloy.createController ('window3').getView());
	
}
function openWindow4 () {
	$.index.tabs[1].open (Alloy.createController ('window4').getView());
}
function openWindow5 () {
	$.index.tabs[1].open (Alloy.createController ('window5').getView());
}
function openWindow6 () {
	$.index.tabs[1].open (Alloy.createController ('window6').getView());
}

