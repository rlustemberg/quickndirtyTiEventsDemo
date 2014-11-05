var Alloy = require('alloy'), _ = Alloy._, Backbone = Alloy.Backbone;
/**
 * Quick and dirty data object with custom getters and setters for a property and event emitter
 */
function MyModel () {
	//quick and dirty event emitter
	_.extend (this, Backbone.Events);
	var self = this;
	var _myProp; //some private variable
	//defining getters and setters
	Object.defineProperty(this, 'myProp', {
		get: function() {
			return _myProp;
		},
		set: function(value) {
			_myProp = value;
			self.trigger ('change', {myProp : _myProp});
		}
	});
}

module.exports = MyModel;


