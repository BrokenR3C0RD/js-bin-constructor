/*
	Create a type object.
	
*/
module.exports = function(object){
	if(typeof(object)!=="object"){
		throw new TypeError("Parameter should be an object, got "+typeof(object))
		return false
	}
	var output = {}
	for(var level in object){
		var temp = object[level]
		if(typeof(temp)==="object"){
			//Run it through this function to get the types, and then set that as the output
			output[level]=module.exports(temp)
			//Check if it's a buffer by looking for toJSON
			if(typeof(output[level].toJSON)==="string"){
				output[level] = "Buffer"
			}
		} else {
			//Just set the output as the type
			output[level]=typeof(temp)
			//If it's a number, figure out more about it and set the type
			if(output[level]==="number"){
				if(temp.toString().indexOf(".")!==-1){
					//If it has a decimal, it's a floating point
					output[level]="float"
				} else if(temp < 0){
					//If it's negative without a decimal, it's a signed integer
					output[level]="int"
				} else {
					//If it's neither a floating point or an integer, we can assume it's an unsigned integer
					output[level]="uint"
				}
			}
		}
	}
	return output;
}








































