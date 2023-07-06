// console.log("Frist -line=================================")
// getStudent(1,(student)=>{
//     console.log("student",student)
//     getSubject(student.id,(subjects)=>{
//         console.log(subjects)
//         getMarks(subjects[0],(mark)=>{
//             console.log(mark)
//         });
//     });
// });
console.log("last-line=====================================")

// const promise = getStudent(1);

// promise
// .then((student)=>getSubject(student.id))
// .then((subject)=>getMarks(subject[0]))
// .then((mark)=> console.log(mark))
// .catch((erroe)=>console(eror));

// function getStudent (id,resolve){
//     new Promise ((resolve,reject)=>{
//          setTimeout(() => {
//     console.log("Getting data from Database");
//     resolve({name:'Bob',id:id}) 
   
// }, (2000));
//     })
   
// }

// function getSubject(id,resolve){
//     new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         console.log("Getting subject of student",id);
//         resolve(["maths","computer","science"])
        
//     }, 2000)  
//     })
//     ;
// }

// function getMarks(subject,resolve){
//     new Promise((resolve,reject))
//     setTimeout(() => {
//         console.log("Getting marks of",subject);
//         resolve(80)
        
//     }, 2000);
// }



// Java Script


//JavaScript HTML methods is getElementById()
// <!DOCTYPE html ;
// <html>
// <body>

// <p id = "demo"></p>
// <button type="button" onclick='document
// .getElementById("demo").innerHTML = 
// "Hello JavaScript!"'> Click Me</button>
// </body>
// </html>




// JavaScript HTML methods
getElementById()

document.getElementById(id).innerHTML = "Hello"
// it accepts both double and single quotes

document.getElementById(id).src='image'
// JavaScript can change HTML attribute values

document.getElementById(id).style.fontSize= "10px"
//for styling

document.getElementById(id).style.display="block"
// hiding HTML elements can be done by changing display style


// JavaScript code is inserted betwwen <script> tags

{/* <script>
document.getElementById(id).innerHTML = "Hello";
</script> */}


// JavaScript Function

// A JavaScript function is ablock of JavaScript code 

/* 
<script>

function javaScriptFunction(){
     document.getElementById(id).innerHTML = "Hello";
    }
</script> 

external function

<script src="Function.js"></script>

function javaScriptFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
  } ---> it has stored in seperate file
*/

/*
Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().

 ---->The innerHTML property defines the HTML content
 ---->The document.write() method should only be used for testing.
 ---->You can use an alert box to display data window.alert()
 ---->For debugging purposes, you can call the console.log() method in the browser to display data
 ---->you can call the window.print() method in the browser to print the content of the current window
 */


 // How to create variables:
var x;
let y;

// How to use variables:
x = 10;
y = 20;
let z = x + y;

/*

Fixed values
Variable values

Fixed values are called Literals.
Numbers and String

Variable values are called Variables.
In a programming language, variables are used to store data values.
JavaScript uses the keywords var, let and const to declare variables.
An equal sign is used to assign values to variables.

JavaScript Operators
--------------------

1.arithmetic operators ( + - * / )
2.assingment operator ( = )

JavaScript Expressions
An expression is a combination of values, variables, and operators
which computes to a value

Keywords

let
var 
const

JavaScript is Case Sensitive
All JavaScript identifiers are case sensitive


The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browser

Example using var
var x = 5;   re-assignable
var y = 6;   Re-declarable
var z = x + y;


Example using let
let x = 5;  re-assignable
let y = 6;  not Re-declarable
let z = x + y;


Example using const
const x = 5;  not re-assignable
const y = 6;  Not Re-declarable
const z = x + y;


Types of JavaScript Operators

Arithmetic Operators are used to perform arithmetic on numbers
Assignment operators assign values to JavaScript variables
Comparison operators are fully described in the JS Comparisons
The += assignment operator can also be used to add (concatenate) strings
Logical operators are fully described in the JS Comparisons


JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatypes

1. An object
2. An array
3. A date

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"son"};

// Array object:
const cars = ["TATA", "Volvo", "BMW"];

// Date object:
const date = new Date("2023-07-05");


JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task


Function to compute the product of p1 and p2

function myFunction(p1, p2) {
  return p1 * p2;
}

JavaScript Function Syntax

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
-----------------------------------------------------------------
Function is called, the return value will end up in x
    
b let x = myFunction(4, 3);

function myFunction(a, b) {
    Function returns the product of a and b
  return a * b;
}

JavaScript Objects
------------------

assigns many values (Fiat, 500, white) to a variable named car

const car = {type:"Fiat", model:"500", color:"white"};

Object Definition
You define (and create) a JavaScript object with an object literal

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

Spaces and line breaks are not important.
An object definition can span multiple lines


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};


JavaScript Event Handlers
Event handlers can be used to handle and verify user input, user actions, and browser actions


-page load
-page close
-click a button
-user input data like this......
-excute JavaScript code
-call jS function
-function to HTML element
(event handlers in the HTML DOM) - more about Event Handler

JavaScript Strings
-------------------
A JavaScript string is zero or more characters written inside quotes.
Example
    let text = "John Doe";

JavaScript String Methods
-------------------------

String length---->let length = text.length; //The length property returns the length of a string

String slice()---->let text = "Apple, Banana, Kiwi";//JavaScript counts positions from zero.First position is 0.Second position is 1.
                   let part = text.slice(7, 13);

String substring()--->let str = "Apple, Banana, Kiwi";//substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().
                      let part = str.substring(7, 13);  

String substr()--->let part = str.substr(7, 6);//substr() is similar to slice().
                                                 The difference is that the second parameter specifies the length of the extracted part.

String replace()---->let newText = text.replace("Microsoft", "W3Schools");//The replace() method replaces a specified value with another value in a string


String replaceAll()---> text = text.replaceAll("cats","dogs");//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced

String toUpperCase()---> let text2 = text1.toUpperCase();//A string is converted to upper case with toUpperCase()
String toLowerCase()---> let text2 = text1.toLowerCase();  // text2 is text1 converted to lower

String concat()--------> let text3 = text1.concat(" ", text2); //concat() joins two or more strings

String trim()----------> let text2 = text1.trim(); //The trim() method removes whitespace from both sides of a string

String trimStart()-----> let text2 = text1.trimStart(); //The trimStart() method works like trim(), but removes whitespace only from the start of a string

String trimEnd()-------> let text2 = text1.trimEnd(); //The trimEnd() method works like trim(), but removes whitespace only from the end of a string

String padStart()------> let padded = text.padStart(4,"0"); //It pads a string with another string (multiple times) until it reaches a given length
String padEnd()--------> let padded = text.padEnd(4,"0"); //It pads a string with another string (multiple times) until it reaches a given length.

String charAt()--------> let char = text.charAt(0); //The charAt() method returns the character at a specified index (position) in a string

String charCodeAt()----> let char = text.charCodeAt(0); //The charCodeAt() method returns the unicode of the character at a specified index in a string

String split()---------> text.split(",")    // Split on commas
                         text.split(" ")    // Split on spaces
                         text.split("|")    // Split on pipe



String Search Methods
---------------------


String indexOf()--------> let index = text.indexOf("locate"); //The indexOf() method returns the index (position) the first occurrence of a string in a string

String lastIndexOf()----> let index = text.lastIndexOf("locate"); //The lastIndexOf() method returns the index of the last occurrence of a specified text in a string

String search()---------> text.search("locate"); //The search() method searches a string for a string (or a regular expression) and returns the position of the match

String match()----------> text.match("ain"); //The match() method returns an array containing the results of matching a string against a string (or a regular expression)

String matchAll()-------> const iterator = text.matchAll("Cats"); //The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression)

String includes()-------> text.includes("world"); //The includes() method returns true if a string contains a specified value.Otherwise it returns false

String startsWith()-----> text.startsWith("Hello"); //The startsWith() method returns true if a string begins with a specified value

String endsWith()-------> text.endsWith("Doe"); //The endsWith() method returns true if a string ends with a specified value.

JavaScript Template Literals
----------------------------

Template Literals-> The syntax is - ${...}     //Template literals provide an easy way to interpolate variables and expressions into strings
Template Strings-->
String Templates
Back-Tics Syntax-->Template Literals use back-ticks (``) rather than the quotes ("") to define a string

New Number Methods
------------------

Number.isInteger() //The Number.isInteger() method returns true if the argument is an integer
Number.isSafeInteger() //The Number.isSafeInteger() method returns true if the argument is a safe integer

JavaScript Number Methods
-------------------------

Method              	Description

toString()	          Returns a number as a string
toExponential()       Returns a number written in exponential notation
toFixed()	            Returns a number written with a number of decimals
toPrecision()	        Returns a number written with a specified length
ValueOf()            	Returns a number as a number 

Method              	Description

Number()	            Returns a number converted from its argument.
parseFloat()         	Parses its argument and returns a floating point number
parseInt()	          Parses its argument and returns a whole number

Number Object Methods
---------------------

Method	                Description

Number.isInteger()    	Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	    Converts a string to a number
Number.parseInt()     	Converts a string to a whole number


*/