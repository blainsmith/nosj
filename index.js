'use strict';

var ISO8601_DATE_REGEX = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/; // eslint-disable-line

function serialize(object) {
	function replacer(key, value) {
		if (typeof value === 'string' && value.match(ISO8601_DATE_REGEX)) {
			value = new Date(value);
			value = value.toISOString();
		}
		return value;
	}

	return JSON.stringify(object, replacer);
}

function deserialize(string, options) {
	options = options || {stringToDates: true};

	function replacer(key, value) {
		var newValue;
		if (options.stringToDates && typeof value === 'string' && value.match(ISO8601_DATE_REGEX)) {
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
