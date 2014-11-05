var args = arguments[0] || {};
/**
 * Backbone.Events.once() is not implemented in Backbone v 9.x.x (included in Alloy)
 * It should throw an exception
 */
Alloy.Globals.events.once ('app:eventWithReferenceOnce',function (e){
	try {
		var color = (e.window.backgroundColor === 'white') ? 'red' : 'white';
		e.window.setBackgroundColor (color);
	}
	catch (e) {
		Ti.API.error (JSON.stringify (e));
	}
});