
// JS File for class demo 
// Ab Mosca 
// Last moditifed: 09.23.2022 

// Printing 
console.log("Hello world");

// Variables 

var varVar = "string"; 

const myCourse = "DS4200"; 
console.log(myCourse);

//myCourse = "DS2001";

let season = "Fall"; 
console.log(season);

season = "Winter";
console.log(season); 

console.log(typeof(season)); 

// functions 
function tentimesFaveNum(faveNum) {
    let tenTimes = faveNum * 10; 
    return tenTimes; 
} 

let favoriteNum = 6; 

let tenTimesFave = tentimesFaveNum(favoriteNum); 
console.log(tenTimesFave); 
//console.log(tenTimes); 

// Modifying webpage 
function buttonClicked() {

    let newText = "Button was clicked"; 

    //Select element we want to modify 
    let buttonDiv = document.getElementById("button-div");

    //Update text 
    buttonDiv.innerHTML = newText; 
}





















