var args = arguments[0] || {};
//Eventlisteners
Ti.App.addEventListener ('app:eventWithData',eventHandler);
Ti.App.addEventListener ('app:eventWithMethod',eventHandler);
Alloy.Globals.events.on ('app:eventWithData',eventHandler);
Alloy.Globals.events.on ('app:eventWithMethod',eventHandler);
/**
 * We don't invoke a cleanup callback on closing the window. As a result we generate a memory leak.
 * We can se the amount of events increasing linearly as we open and close the window
 */