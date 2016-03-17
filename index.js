'use strict';

function serialize(object) {
	function replacer(key, value) {
		if (value instanceof Date) {
			value = value.toString();
		}
		return value;
	}

	return JSON.stringify(object, replacer);
}

function deserialize(string, options) {
	options = options || {stringToDates: true};

	function replacer(key, value) {
		var newValue;
		if (options.stringToDates && typeof value === 'string' && !isNaN(Date.parse(value))) {
			newValue = new Date(value);
		} else {
			newValue = value;
		}
		return newValue;
	}

	return JSON.parse(string, replacer);
}

module.exports = {
	serialize: serialize,
	deserialize: deserialize,
	stringify: serialize,
	parse: deserialize
};
