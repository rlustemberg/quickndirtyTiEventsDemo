var args = arguments[0] || {};
//Eventlisteners
Ti.App.addEventListener ('app:eventWithData',eventHandler);
Ti.App.addEventListener ('app:eventWithMethod',eventHandler);
Alloy.Globals.events.on ('app:eventWithData',eventHandler);
Alloy.Globals.events.on ('app:eventWithMethod',eventHandler);
/**
 * Here we do remove the event listeners
 * Surprisingly, removing the events here will remove the events left leaking on window.js (bear in mind both controllers reference the same global event handler)
 */
function cleanup (){
	Ti.App.removeEventListener ('app:eventWithData',eventHandler);
	Ti.App.removeEventListener ('app:eventWithMethod',eventHandler);
	Alloy.Globals.events.off ('app:eventWithData',eventHandler);
	Alloy.Globals.events.off ('app:eventWithMethod',eventHandler);
}