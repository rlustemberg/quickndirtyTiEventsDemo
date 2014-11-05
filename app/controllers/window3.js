var args = arguments[0] || {};
Ti.App.addEventListener ('app:eventWithReference',eventHandler);
Alloy.Globals.events.on ('app:eventWithReference',eventHandler);
//local eventHandler variable overrided the global eventHandler()
function eventHandler (e) {
	try {
	    //toggling the referenced Ti.UI.Window property. On Android it  works on both Backbone and Ti.App events, on iOS, Ti.App throws an exception
		var color = (e.window.backgroundColor === 'white') ? 'red' : 'white';
		e.window.setBackgroundColor (color);
	}
	catch (e) {
		Ti.API.error (JSON.stringify (e));
	}
	
}
//We don't cleanup the event listeners, so we generate a leak
function cleanup() {
	
}