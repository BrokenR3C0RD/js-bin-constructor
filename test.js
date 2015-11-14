typeGen = require("./index")
Type = require("js-binary").Type

m = {
	"test1":{
		"test2":{
			"test3":[1,3,5,7,9],
			"string":"Hello, world",
			"buffer":new Buffer("Hello, world!"),
			"number":13.455,
			"int":-1,
			"boolean":true,
		},
		"test5":[4, {
			"bacon":true
		}, "Test"]
	}
}
tests = typeGen(m)
t = new Type(tests)
l = t.encode(m)
console.log(l)
console.log(t.decode(l))






































