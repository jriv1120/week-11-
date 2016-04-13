//Constructor 
//make a new node file called student.js
//Inside student.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.



function Student(gender, grade, GPA, detentions, sleepingClass, catchPhrase){

	//Sub-properties using those parameters
	this.gender = gender;
	this.grade = grade;
	this.gpa = gpa
	this.detention = detention;
	this.sleepingClass = sleepingClass
	this.catchPhrase = catchPhrase 
	this.canStudentHaveFun = function(){
		if((this.detentions < 10) && (this.gpa > 2)){
			console.log("I can have fun!")
		}else{
			console.log("I cannot have fun.");
		}
	};

}

student.canStudentHaveFun();
module.exports = Students;