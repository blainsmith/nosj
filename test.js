process.env.TZ = 'UTC';

import test from 'ava';
import nosj from './';

const object = {
	string: 'hello',
	number: 13,
	float: 3.14,
	date: new Date('Wed Jan 13 1982 00:00:00 GMT+0000 (UTC)'),
	array: [
		{a: 'a'},
		{b: 'b'}
	],
	object: {
		x: 'x',
		y: 'y'
	}
};

const objectStringDates = {
	string: 'hello',
	number: 13,
	float: 3.14,
	date: 'Wed Jan 13 1982 00:00:00 GMT+0000 (UTC)',
	array: [
		{a: 'a'},
		{b: 'b'}
	],
	object: {
		x: 'x',
		y: 'y'
	}
};

const string = '{"string":"hello","number":13,"float":3.14,"date":"Wed Jan 13 1982 00:00:00 GMT+0000 (UTC)","array":[{"a":"a"},{"b":"b"}],"object":{"x":"x","y":"y"}}';

test('serialize', t => {
	t.is(nosj.serialize(object), string);
});

test('deserialize', t => {
	t.same(nosj.deserialize(string), object);
	t.same(nosj.deserialize(string, {stringToDates: false}), objectStringDates);
});
