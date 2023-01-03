
// JS File for class demo part 2
// Ab Mosca 
// Last moditifed: 09.26.2022 

// Event handler for fave-vis submit button 
function submitClicked() {

    // find which radio is selected 
    let vals = document.getElementsByTagName("input");

    // loop through all inputs and find selected one 
    for (let i = 0; i < vals.length; i++){

        if(vals[i].checked) {
            //console.log(vals[i].value);

            //update text
            let newText = "Selected Vis: " + vals[i].value;
            document.getElementById("selected-vis").innerHTML = newText;
        } 
    }
}

// Add event handler to button 
document.getElementById("subButton").addEventListener("click", submitClicked);

// Self-invoking functions 
(function logging() {
    console.log("self-invoking function;");
})(); 

//Dynamic styling 

function submit2Clicked() {
    let maxPnt = document.getElementById("max"); 

    // add class orange 
    maxPnt.classList.add("orange"); 
}

// add to button 
document.getElementById("subButton2").addEventListener("click", submit2Clicked);




























