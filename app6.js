// chapter 6 to 9 
// ===========================================
// question 1

var num = prompt("Enter a number: ");
var result = num * 2 + 5;
document.write("The result is: " + result + "<br>");

var a = 10;
var preIncrement = ++a;
var postIncrement = a++;
var preDecrement = --a;
var postDecrement = a--;
console.log(a);

//question 2

var a = 2
var b = 1;
var result = --a - --b + ++b + b--;
console.log(result );

//question 3

var name ="Azra";
alert("Hello, " + name + "! Welcome!");
console.log(name);

//question 5

var table = 10 ;
for (var i = 1 ; i <= table ; i++ ){
    var result = 2 *i;
    document.write('2 x'+ i + "=", result ,"<br>");
}
var num =prompt("enter a number :")
for (var i =1;i<=10;i++) {
document.write(num+"*" + i + "="+ num * i +"<br>");
}

//question 6


var firstSubj = prompt("Enter the first subject name:");
var secondSubj = prompt("Enter the second subject name:");
var thirdSubj = prompt("Enter the third subject name:");

 var totalMarksSubject = 100;

 var marks1 =  (prompt(`Enter obtained marks  ${firstSubj}:`));
 var marks2 =  (prompt(`Enter obtained marks  ${secondSubj}:`));
 var marks3 =  (prompt(`Enter obtained marks  ${thirdSubj}:`));

 var totalObtainedMarks = marks1 + marks2 + marks3;
 var percentage = (totalObtainedMarks / (3 * totalMarksSubject)) * 100;

const results = document.getElementById('results');



