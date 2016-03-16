'use strict';

function serialize(object) {
	return JSON.stringify(object);
}

function deserialize(string, options) {
	options = options || {stringToDates: true};

	function formatter(key, value) {
		let newValue;
		if (options.stringToDates && typeof value === 'string' && !isNaN(Date.parse(value))) {
			newValue = new Date(value);
		} else {
			newValue = value;
		}
		return newValue;
	}

	return JSON.parse(string, formatter);
}

module.exports = {
	serialize: serialize,
	deserialize: deserialize,
	stringify: serialize,
	parse: deserialize
};
