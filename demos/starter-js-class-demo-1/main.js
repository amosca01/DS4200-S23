
// JS File for class demo 
// Ab Mosca 
// Last moditifed: 01.30.2023 

// print 
console.log("hello world"); 

// variables 

// constants 
const myCourse = "DS4200";
console.log(myCourse); 

//myCourse = "DS2000"; 

let season = "Winter"; 
console.log(season); 

season = "Spring";
console.log(season); 

// var
var x = 7; 

// types 
console.log(typeof(season)); 

let hwDue = true; 
console.log(typeof(hwDue)); 

let faveNum = 6; 
console.log(typeof(faveNum)); 

// loosely types language 
faveNum = "six"; 
console.log(typeof(faveNum)); 


// functions 
function tenTimes(num) {
    let result = num * 10; 
    return result; 
}

let ans = tenTimes(6);
console.log(ans);

// button function 
function buttonClicked() {
    console.log("button was clicked!"); 

    let newText = "Button was clicked"; 

    // select the element 
    let buttonDiv = document.getElementById("button-div"); 

    buttonDiv.innerHTML = newText; 
}



























