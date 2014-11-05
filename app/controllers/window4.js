var args = arguments[0] || {};
Ti.App.addEventListener ('app:eventWithReference',eventHandler);
Alloy.Globals.events.on ('app:eventWithReference',eventHandler);
function eventHandler (e) {
	try {
		var color = (e.window.backgroundColor === 'white') ? 'red' : 'white';
		e.window.setBackgroundColor (color);
	}
	catch (e) {
		Ti.API.error (JSON.stringify (e));
	}
	
}
function cleanup() {
	Ti.App.removeEventListener ('app:eventWithReference',eventHandler);
	Alloy.Globals.events.off ('app:eventWithReference',eventHandler);
}