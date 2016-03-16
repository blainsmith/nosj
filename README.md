# nosj [![Build Status](https://travis-ci.org/blainsmith/nosj.svg?branch=master)](https://travis-ci.org/blainsmith/nosj)

> JSON serializer and deserializer for simple JSON objects.


## Install

```
$ npm install --save nosj
```


## Usage

```js
var nosj = require('nosj');

var obj = {
	string: 'hello',
	number: 13,
	float: 3.14,
	date: new Date('01/13/1982'),
	array: [
		{a: 'a'},
		{b: 'b'}
	],
	object: {
		x: 'x',
		y: 'y'
	}
};
nosj.serialize(obj);
//=> {"string":"hello","number":13,"float":3.14,"date":"1982-01-13T05:00:00.000Z","array":[{"a":"a"},{"b":"b"}],"object":{"x":"x","y":"y"}}

var string = '{"string":"hello","number":13,"float":3.14,"date":"1982-01-13T05:00:00.000Z","array":[{"a":"a"},{"b":"b"}],"object":{"x":"x","y":"y"}}'
nosj.deserialize(string);
//=>
// {
//   string: 'hello',
//   number: 13,
//   float: 3.14,
//   date: Wed Jan 13 1982 00:00:00 GMT-0500 (EST),
//   array: [ { a: 'a' }, { b: 'b' } ],
//   object: { x: 'x', y: 'y' }
// }
```


## API

### serialize(object)

> Serialize a string back into JSON

### deserialize(string, [options])

> Deserialize a string back into JSON

#### options

##### stringToDates

Type: `boolean`  
Default: `true`

Attempt to convert all strings to dates. If successful, then the property will be a `Date` object. Set option to `false` to keep all strings as string and do not attempt to convert to dates.


## License

MIT © [Blain Smith](http://blainsmith.com)
