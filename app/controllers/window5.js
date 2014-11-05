var args = arguments[0] || {};
/**
 * On this file we listen for events. It's just to show that event listeners are active independently of the window having been opened or focused, both Android and iOS
 * So, no bugs here
 */
function clear () {
	$.info.setText('');
}
//Event listeners

Ti.App.addEventListener ('app:eventWithData',eventHandler);
Ti.App.addEventListener ('app:eventWithMethod',eventHandler);
Alloy.Globals.events.on ('app:eventWithData app:eventWithReference',eventHandler); //you can add several events to an event handler inline
Alloy.Globals.events.on ('app:eventWithMethod',eventHandler);

function eventHandler (e) {
	var message = 'Event received from: ' + e.from;
	$.info.setText(message);
}
//no need to clean up. This window is never closed