
// JS File for class demo 
// Ab Mosca 
// Last moditifed: 02.10.2022 


//########################################################################
// This is an external js file that I've added to my html 
//      it's added with the <script> tag. 
//########################################################################

//########################################################################
// Printing to the developer console 
//      How do we print values for debugging? 
//########################################################################
console.log("Hello world");

//########################################################################
// Variables 
//      There are three ways to declare variables in JS (var, const, let)
//      Types of vaiables are string, number, boolean 
//########################################################################

// var -- DON'T USE THIS! It's depricated. 
var varVar = "Don't use var to declare variables!"; 
console.log(varVar); 

// const -- This is for constant (unchangeable) variables
const myCourse = "DS4200";
console.log(myCourse); 

//myCourse = "DS200";

// let -- This is for variables with values that can change 
let season = "Winter"; 
console.log(season); 

season = "Spring";
console.log(season); 

// Variables can be strings like those above, or numbers, or boolean
console.log(typeof(season)); 

let hwDue = true; 
console.log(hwDue);
console.log(typeof(hwDue)); 

let favoriteNumber = 6; 
console.log(favoriteNumber);
console.log(typeof(favoriteNumber));

// JavaScript is loosely typed, that means it will not stop you from 
//  changing variable type with an assignment
favoriteNumber = "six"; 
console.log(favoriteNumber);
console.log(typeof(favoriteNumber));

//########################################################################
// User defined JS Functions  
//      Functions you (the coder) define   
//########################################################################

// We define function with the key word function, name of the function
// parameters, and a body. 
// The function does not have to take parameters, nor does it have to
// return anything  
function tentimesFaveNum(faveNum) {
    let tenTimes = faveNum * 10; 
    return tenTimes; 
}

// Note that the scope of tenTimes is only within tentimesFaveNum()
// In other words, this next line will cause an error. 
//console.log(tenTimes); 

// Call or invoke a user defined function with its name and parameters
let tenTimesFave = tentimesFaveNum(favoriteNumber);
console.log(tenTimesFave);  

//########################################################################
// Interactivity with JS
//      We use JS to make our webpages interactive.
//      For example, to make a button trigger a change on the page   
//########################################################################

// Let's update the text in button-div when the button is clicked 

// First, define a function to handle the response to a button click  
function buttonClicked() {
    let newText = "Button was clicked!"; 

    // Select an element in the DOM by id
    let buttonDiv = document.getElementById("button-div");

    // Update the HTML code inside of an element
    buttonDiv.innerHTML = newText; 
}

// Next, we need to update our html so this function is called 
// when the button is clicked 

// Note: You can use the developer console to check for changes! 




























