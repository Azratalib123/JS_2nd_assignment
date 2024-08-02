
// CHAPTER 17 TO 20 
//==========================================

// Question 1


var multiArray = [];
multiArray[0] = [];
multiArray[1] = [];

console.log(multiArray); 


// Question 2


var matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];
console.log(matrix);
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
}


// Question 3

    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }

// Question 4



var tabNum = prompt("Enter a number to show it's multiplication table:");
var tabLength = prompt("Enter length multiplication table:");

tabNum = (tabNum);
tabLength = (tabLength);

for (var i = 1; i <= tabLength; i++) {
    console.log(`${tabNum} x ${i} = ${tabNum * i}`);
}


// Question 5

 fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// Question 6

//  Counting
var counting = [];
for (var i = 1; i <= 15; i++) {
    counting.push(i);
}
console.log("Counting:", counting.join(", "));

//Reverse counting
var reverseCounting = [];
for (var i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
console.log("Reverse counting:", reverseCounting.join(", "));

//  Even numbers
var evenNumbers = [];
for (var i = 0; i <= 20; i += 2) {
    evenNumbers.push(i);
}
console.log("Even:", evenNumbers.join(", "));

//  Odd numbers
var oddNumbers = [];
for (var i = 1; i < 20; i += 2) {
    oddNumbers.push(i);
}
console.log("Odd:", oddNumbers.join(", "));

//  Series: 2k to 20k
var series = [];
for (var i = 2; i <= 20; i += 2) {
    series.push(i + "k");
}
console.log("Series:", series.join(", "));


// Question 8


var A1 = [24, 53, 78, 91, 12];

var largest = A1[0]; 
for (var i = 1; i < A1.length; i++)  {
    if (A1[i] > largest) {
        largest = A1[i];
    }
}
console.log("Array Item :", A1);
console.log("The largest number is:", largest);

// Question 9

var A2 = [24, 53, 78, 91, 12];

var smallest = A2[0]; 
for (var i = 1; i < A2.length; i++) {
    if (A2[i] < smallest) {
        smallest = A2[i];
    }
}
console.log("Array Item :", A2);
console.log("The smallest number is:", smallest);

// Question 10


for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


//====================++++++++++++++ END +++++++++++++===========================