// PART ONE

//#1
var myBio = {
	firstName: 'Adewumi',
	lastName: 'Adeyemo', 
	occupation: 'Web Developer'
};

//#2
myBio.firstName; myBio.lastname; myBio.occupation;
myBio['firstName']; myBio['lastName']; myBio['occupation']; 

//#3
myBio['hobby'] = 'Hair Making';
delete myBio['occupation'];
myBio;

/* #4

The difference between the bracket and the dot 
notation is that JavaScript throws error when the 
dot notation is used to carry out some evaluation.
*/

//#5
var namesAndHobbies = {
elie : "JavaScript" ,
matt : "jogging" ,
janey : "table building" ,
tim : "sailing"
}

for (var singleKey in namesAndHobbies) {
	console.log(Object.key(namesAndHobbies) + " " + "=>" + " " +namesAndHobbies[singleKey]);
}

//#6
namesAndHobbies.Adewumi = "Sewing";

//#7
if ("Adewumi" in obj) {
	console.log(namesAndHobbies.name);
}

//PART TWO

//programming object.
var programming = {
	languages : [ "JavaScript" , "Python" , "Ruby" ],
	isChallenging : true ,
	isRewarding : true ,
	difficulty : 8 ,
	jokes :
"http://stackoverflow.com/questions/234075/what-is-your-best-program
mer-joke"
};
/*#1
programming[languages.push("Go")];*/

//#2
programming.difficulty = 7;

//#3
delete programming['joke'];

//#4
programming['isFun'] = true';

//#5
for(var i=0; i>0; i++ ) {
console.log(programming['languages']);
}

//#6
for (var singleKey in programming) {
	console.log(Object.keys(programming);
}
//#7
for (var singleKey in programming) {
	console.log(programming[singleKey]);
}

//PART THREE
//#1
function myName() {
	var name = "Adewumi Adeyemo";
	console.log(name);
}
myName()
var favouriteFoods = ["pizza", "ice cream"];

//#2
function randomFood() {
	favouriteFoods[Math.random];
}
randomFood()
var numbers = [1,2,3,4,5,6,7,8,9,10];

//#3
function displayOddNumbers() {
	for(var i=0; i<=10; i++) {
		if(numbers[i]%2===1) {
		console.log(numbers[i]);
		}
	}
}
displayOddNumbers()

//#4
function displayEvenNumbers() {
	for(var i=0; i<=10; i++) {
		if(numbers[i]%2===0) {
		console.log(numbers[i]);
		}
	}
}
displayEvenNumbers()

//#5
function returnFirstOddNumber() {
	for(var i=0; i<=2; i++) {
		if(numbers[i]%2===1 ) {
		console.log(numbers[i]);
		}
	}
}
returnFirstOddNumber()

//#6
function displayEvenNumbers() {
	for(var i=0; i<=1; i++) {
		if(numbers[i]%2===0) {
		console.log(numbers[i]);
		}
	}
}
displayEvenNumbers()

//#7
function displayEvenNumbers() {
	for(var i=0; i<=5; i++) {
		
		console.log(numbers[i]);
		
	}
}
displayEvenNumbers()

//#8
function displayEvenNumbers() {
	for(var i=6; i<=10; i++) {
		
		console.log(numbers[i]);
		
	}
}
displayEvenNumbers()

//PART FOUR
//#1
















