
// JS File for class demo part 2
// Ab Mosca 
// Last moditifed: 02.07.2023

// Event handler for click 
function submitClicked() {

    let vals = document.getElementsByTagName("input"); 

    console.log(vals.length); 

    for (let i = 0; i < vals.length; i++){

        if(vals[i].checked) {
            // console.log(vals[i].value);

            //update filler 
            let newText = "Selected Vis: " + vals[i].value;
            document.getElementById("selected-vis").innerHTML = newText; 
        }
    } 
}

document.getElementById("subButton")
        .addEventListener('click', submitClicked); 

// Anonymous Functions and self invoking functions 
(function() {
    console.log("my anonymous function"); 
})(); 

let note = "note";
(function(message) {
    console.log(message);
})(note);

(() => {console.log("another anonymous function")})(); 

((message) => {console.log(message)})(note); 

//dynamic styling 
function submit2Clicked() {

    let maxPt = document.getElementById("max");

    maxPt.classList.add("orange"); 

}

document.getElementById("subButton2")
        .addEventListener("click", submit2Clicked);
























