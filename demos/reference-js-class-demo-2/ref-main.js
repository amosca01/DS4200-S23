
// JS File for class demo part 2
// Ab Mosca 
// Last moditifed: 09.26.2022 


//########################################################################
// Forms 
//      These allow us to gather input from the user. There are a 
//      lot of different types of input you can look into (buttons, 
//      radio buttons, checkboxes, drop-down menus, etc.)  
//########################################################################

// Getting information from a form requires event handling 

// First, define event handler 
function submitClicked() {

    // get information from inputs (this works because
    // we only one form with inputs, if you had multiple forms
    // with inputs you'd need to think of a different way to 
    // grab the elements)
    let vals = document.getElementsByTagName("input"); 

    // loop through inputs and find which is selected 
    for (let i = 0; i < vals.length; i++) {
        if(vals[i].checked) {

            //console.log(vals[i].value); 

            //update text
            let newText = "Selected Vis: " + vals[i].value; 
            document.getElementById("selected-vis").innerHTML = newText; 
        } 
    }
}

// Add event handler to button 
document.getElementById("subButton").addEventListener('click', submitClicked);

//########################################################################
// Self-invoking Function  
//     After function definition, we can add () to get the function
//     to immediately run  
//########################################################################

// Note the syntax -- the () at the end automatically invokes the function
(function logging() {
    console.log("My self-invoking, function");
})(); 

//########################################################################
// Dynamic Styling
//      If we want styling to change, we change classes 
//########################################################################

// function to change color of max point 
function submit2Clicked() {
    let maxPnt = document.getElementById("max"); 
    
    maxPnt.classList.add("orange"); // also check out remove() and toggle() 
}

// Add event handler to button 
document.getElementById("subButton2").addEventListener('click', submit2Clicked);































