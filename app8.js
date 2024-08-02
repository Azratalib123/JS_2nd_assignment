
// CHAPTER 12 TO 13 
//===========================================

//Question 1
 

var character = prompt("Enter a character:");
if (character.length === 1) {
        let charCode = character.charCodeAt(0);

    // Check number
    if (charCode >= 48 && charCode <= 57) {
        console.log(character + ' is a number.');
    }
    // Check uppercase letter
    else if (charCode >= 65 && charCode <= 90) {
        console.log(character + ' is an uppercase letter.');
    }
    // Check lowercase letter
    else if (charCode >= 97 && charCode <= 122) {
        console.log(character + ' is a lowercase letter.');
    }
    else {
        console.log(character + ' is not a number or letter.');
    }
} else {
    console.log("Please enter exactly one character.");
}


//Question 2


var num1 = (prompt("Enter the first integer:"));
var num2 = (prompt("Enter the second integer:"));
if (num1 === num2) {
    console.log("Both integers are equal.");
} else {
    if (num1 > num2) {
        console.log("The larger integer is: " + num1);
    } else {
        console.log("The larger integer is: " + num2);
    }
}


//Question 3


var number = (prompt("Enter a number:"));
if (number > 0) {
    console.log(number + " is positive.");
} else if (number < 0) {
    console.log(number + " is negative.");
} else {
    console.log("The number is zero.");
}


// Question 4


var character2 = prompt("Enter a character (string of length 1):");
if (character2.length === 1) {
    var lowerCaseChar = character2.toLowerCase();
    var isVowel = false;
    if (lowerCaseChar === 'a' 
        || lowerCaseChar === 'e' 
        || lowerCaseChar === 'i' 
        || lowerCaseChar === 'o' 
        || lowerCaseChar === 'u') {
        isVowel = true;
    }

    // Output the result
    if (isVowel) {
        console.log(character2 + " is a vowel.");
    } else {
        console.log(character2 + " is not a vowel.");
    }
} else {
    alert("Please enter exactly one character.");
}


// Question 5 


var correctPassword = "Azra990";
var userPassword = prompt("Enter your password:");
if (userPassword === "") {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! password.");
} else {
    console.log("Incorrect password.");
}


// Question 6


var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day"; 
} else {
    greeting = "Good evening"; 
}
console.log(greeting); 
console.log(hour);


// Question 7


var time1 = prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):");
var time = parseInt(time1);
var time12Hour;
var period;
if (time >= 0 && time <= 2359) { 
    if (time >= 0 && time < 1200) {
        time12Hour = time;
        period = "AM";
    } else if (time >= 1200 && time < 1300) {
        time12Hour = time;
        period = "PM";
    } else if (time >= 1300 && time <= 2359) {
        time12Hour = time - 1200;
        period = "PM";
    }
    console.log("Time in 12-hour format: " + time12Hour + period);
} else {
    
    console.log("Invalid..Please enter a time b/w 0000 and 2359.");
}


