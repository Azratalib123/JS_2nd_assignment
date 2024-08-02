
// Chapter 9 to 11
//==========================================

// Question 1
var city = prompt("Enter the name city:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights ");
} else {
    alert("You entered:");
}

// Question 2 

var gender = prompt("Please enter your gender (male/female)");

if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Unknown gender. Please enter either 'male' or 'female'.");
}

// Question 3

var color = prompt("Enter the color of the traffic signal (red, yellow, green)");

if (color === "red"){
    alert("Stop! The light is red."); 
}else if(color === "yellow"){
    alert("Get ready to stop. The light is about to turn red.");
}else if(color === "green"){
    alert("Go ahead. The light is green.");
}

//Question 4


var remainingFuel =(prompt("Enter the remaining fuel in litres:"));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel in your car.");
}

// Question 5


 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
    alert("car is smaller than cat");
    }

    //Question 6

var subject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks for each subject:"));

var totalObtainedMarks = subject1 + subject2 + subject3;
var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

var grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else if (percentage >= 50) {
    grade = 'E';
} else {
    grade = 'F';
}

//  results
document.write("Result"+"<br>");
document.write("Total Marks Obtained: " + totalObtainedMarks.toFixed(2)+"<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%"+"<br>");
document.write("Grade: " + grade+"<br>" );


//Question 7


var Number = Math.floor(Math.random() * 10) + 1;
var userGuess = (prompt("Guess the secret number (b/w 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
} else {
    alert("Sorry, incorrect guess. The correct answer was " + secretNumber + ".");
}

// question 8


var number = (prompt("Enter a number to check if it is divisible by 3:"));
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}


//question 9


var myNumber = (prompt("Enter a number to check if it is even or odd:"));
if (myNumber % 2 === 0) {
    alert(myNumber + " is an even number.");
} else {
    alert(myNumber + " is an odd number.");
}


//question 10


var temperature = (prompt("Enter the temperature in Celsius:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's freezing cold!");
}


//question 11

var firstNumber = (prompt("Enter the first number:"));
var secondNumber =(prompt("Enter the second number:"));
//  operation (+, -, *, /, %)
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        result = "Cannot divide by zero!";
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    result = "Invalid operation entered.";
}
// result
alert("Result: " + result);
