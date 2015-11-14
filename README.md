js-bin-constructor
==================

This Node.js module allows you to quickly generate a Type object for js-binary. This is very useful for dynamic data.

Usage
-----

First install the constructor with `npm install js-bin-constructor`

The only thing returned by js-bin-constructor is a function, with the syntax output = construct(object)

###Example

`construct = require('js-bin-constructor');
Type = require('js-binary').Type;
fruitshop = {
	"bought":10,
	"earned":15.36,
	"forsale":["apples","pears","peaches"],
	"debt":-10,
};
type = new Type(construct(fruitshop));
bin = type.encode(fruitshop);`


















