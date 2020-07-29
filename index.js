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
//#a
/*Make a function for add , subtract , multiply , and divide . Each of these
functions should accept two parameters and return the sum, difference, product and
quotient. */

var num1 = prompt("Please enter first number");
var num2 = prompt("Please enter second number");

var add = function(num1, num2){
	ans = num1 + num2;
	return ans
}
add(num1, num2)

// Same funcion can be duplicated for subtract, multiply and divide. Just to change the operator

//#b
function sayHello(firstName){
	if(firstName === "Adewumi") {
		alert("Hello Boss");
	} else {
		alert(`Hello ${firstName}`);
	}
}
sayHello(prompt("Welcome. Please enter your first name"))

// #c
function average(arr){
    var result;
	var itemNum = arr.length-1;
		for(var i=0; i<= itemNum; i++) {
			result += arr[i];
		}
		result /= itemNum;
		alert(result);
}

average([1,2,3,4,5])

// #d 
function createStudent(a, b){
	var studentName = {
		firstName: a,
		lastName: b
	};
	console.log(studentName);
}
createStudent("Elsie", "Schoppik")


//#e
function createStudent(a, b){
	var studentName = {
		firstName: a,
		lastName: b
	};
return studentName	
}

var tim = createStudent("Tim" , "Garcia");
var matt = createStudent("Matt" , "Lane");
var elie = createStudent("Elie" , "Schoppik");
var students = [tim, matt, elie];
alert(students);

//#f








//PART 5
/*
Write a function called displayFullName , which should accept two
parameters, firstName and lastName. The function should be immediately
invoked and return the firstName + lastName. You should NOT have to call
this function, it should invoke right away.
*/
(function displayFullName(){
    var firstName = "Adewumi";
    var lastName = "Adeyemo";
	console.log(firstName + lastName);
})()

/*
Write a function called createCalculator , which should return an object that
has four methods, add , subtract , multiply and divide.
*/

*********** Not correct yet *******************
function createCalculator(num1, num2){
	var calculate = {
		add: num1+num2,
		subtract: num1-num2,
		multiply: num1*num2,
		divide: num1/num2
	}
	return calculate
}
var calc = createCalculator();
calc.add(20,20);
		
**********************************************
	








//PART 6
/* 
------ a ------

What does the following code output? Why?
var firstName = 'Elie' ;
function displayFirstName (){
var firstName = 'Tim' ;
return firstName;
}
displayFirstName(); 
// Tim because the function scope is used

------ b ------

What does the following code output? 
function displayFirstName (){
var firstName = 'Tim' ;
return firstName;
}
displayFirstName();
console.log(firstName) 
// Reference Error because firstName is only defined in the function and can't be used in the global scope

------ c ------

What does the following code output? Why?
console.log(firstName) // Undefined because the variable was not assigned a value before it was used
var firstName = "Elie"

------ d ------ 

What does the following code output? Why?
console.log(firstName) // Syntax Error because firstName hasn't been defined
firstName = 'Elie'

------ e ------

What does the following code output? Why?
function sayHi(){
return 'Hi ' + firstName;
var firstName = 'Elie'
}
sayHi(); // Hi undefined because the variable hasn't been defined 

------ f ------

What does the following code output? Why?
function sayHi(){
return 'Hi ' + firstName;
firstName = 'Elie'
}
sayHi(); // Reference Error 

------ g ------

What does the following code output? Why?
sayHi() // Hi because the function is hoisted
function sayHi (){
return 'Hi!' ;
}

------ h ------

What does the following code output? Why?
sayHi() // Type Error because hoisting only works with declaration and not assignment
var sayHi = function (){
return 'Hi!' ;
}
*/

//PART 7
/* 
printDay
● this function takes in one parameter (a number from 1-7) and returns the day
of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is
less than 1 or greater than 7, the function should return undefined;
*/

function printDay(day){
	if(day < 1 || day > 7){
		return undefined
	} else
	{
	switch(day){
        case "1": alert("Sunday");
		break;
        case "2": alert("Monday");
		break;
        case "3": alert("Tuesday");
		break;
        case "4": alert("Wednesday");
		break;
        case "5": alert("Thursday");
		break;
        case "6": alert("Friday");
		break;
        case "7": alert("Saturday");
		default: 
        
}}}

printDay(num = prompt("Please enter a number between 1 and 7"))
/*
lastElement
● this function takes in one parameter (an array) and returns the last value in
the array. It should return undefined if the array is empty.
*/
lastElement(prompt("Please enter an array").split(","))
function lastElement(arr){
	if (arr.length === 0) {
		return undefined
	} else 
	{
		alert(arr[arr.length-1]);
	}
}










