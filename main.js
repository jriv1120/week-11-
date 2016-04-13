//make a new node file called main.js
//require prompt in itvar prompt = require('prompt');

var Student = require('./student.js');
var Bus = require('./bus.js');

prompt.start();

prompt.get({'name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){
	var student = new Bus(result.name, result.gender, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
		)
}