
// CHAPTER 14 TO 16 
//==========================================

// Question 1

var studentNames = [];
console.log(studentNames);

// Question 2

var studentNames = new Array("azros");
console.log(studentNames);

// Question 3

var mySiblingsArray = ["Samreen", "Sidra", "Tayyab", "Saqib"];
console.log(mySiblingsArray);

// Question 4

var numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

// Question 5

var booleanArray = [true, false, true, false];
console.log(booleanArray);

// Question 6

var mixedArray = ["Azra talib", 42, true, null, { key: "value" }, [1, 2, 3]];
console.log(mixedArray);

// Question 7


var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log(qualifications);
for (var i = 1 ; i < 10; i++ ){
console.log(i);
    }



// Question 8

var studentNames = ["Samreen", "Sidra", "Azra"];
var studentScores = [450, 390, 470];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var name = studentNames[i];
    var score = studentScores[i];
    var percentage = (score / totalMarks) * 100;

    console.log("Name: " + name);
    console.log("Score: " + score);
    console.log("Percentage: " + percentage.toFixed(2) + "%");
    console.log("***--------------------***");
}

// Question 9

var colors = ['Red', 'Green', 'Blue'];
console.log(colors);
var colorAddBegin = prompt('Enter a color to add to the beginning:');
colors.unshift(colorAddBegin);
console.log(colors);
//=========================
var colorAddEnd = prompt('Enter a color to add to the end:');
colors.push(colorAddEnd);
console.log(colors);
//'''''''''''''''''''''''''
colors.unshift('Yellow', 'Purple');
console.log(colors);
//'''''''''''''''''''''''''
colors.shift();
console.log(colors);
//'''''''''''''''''''''''
colors.pop();
console.log(colors);
//'''''''''''''''''''''''
var colorAdd = prompt('Enter the color name to add:');
colors.splice(colorAdd);
console.log(colors);
//''''''''''''''''''''''''
var indexToDelete = prompt('Enter the index from where you want to delete color(s):');
var numToDelete = prompt('Enter how many colors you want to delete:');
colors.splice(indexToDelete, numToDelete);
console.log(colors);


// Question  10 

var scores = [88, 75, 92, 95, 84];
console.log("Initial Scores Array:");
console.log(scores);

scores.sort(function(a, b) {
    return a - b;
});
console.log(scores);




   // Question 11

var cities = [ 'New York', 'Abbottabad', 'Attock', 'Bahawalpur'];
console.log(cities);

var selectedCities = [];
selectedCities = cities.slice(0, 2);
console.log(selectedCities);


// Question 12

var arry = ["This ", " is ", " my ", " cat"];
console.log(arry);
var singleString = arry.join("");
console.log(singleString);

// Question 13

var newArry = [];
newArry.push("First");   
newArry.push("Second");  
newArry.push("Third");  

console.log(newArry);
var removedItem = newArry.shift();  
console.log(newArry);
console.log("Removed item:", removedItem);

// Question 14

var stack = [];
console.log("Initial Stack:");
console.log(stack);

stack.push("First");   
stack.push("Second");  
stack.push("Third");   

console.log(stack);
var removed = stack.pop(); 

console.log(stack);

console.log("Removed item:", removed);

// Question 15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select id='manufacturerSelect'>");
for (var i = 0; i < phoneManufacturers.length; i++) {
document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");




