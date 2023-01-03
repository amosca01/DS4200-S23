/*
D3 Class Demo 1
Prof. Mosca 
Modified: 10/04/2022
*/

const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, 
    top: 50, bottom:50}; 

const FRAME1 = 
    d3.select("#vis1")
        .append("svg")
            .attr("height", FRAME_HEIGHT)
            .attr("width", FRAME_WIDTH)
            .attr("class", "frame"); 

// Add point to FRAME1
FRAME1.append("circle")
            .attr("cx", 50)
            .attr("cy", 50)
            .attr("r", 30)
            .attr("class", "firstCircle"); 

FRAME1.append("circle")
            .attr("cx", 50 + MARGINS.left)
            .attr("cy", 50 + MARGINS.top)
            .attr("r", 30)
            .attr("class", "firstCircle"); 

// Binding Data 

const data1 = [100, 200, 300]; 

const FRAME2 = d3.select("#vis2")
                .append("svg")
                    .attr("width", FRAME_WIDTH)
                    .attr("height", FRAME_HEIGHT)
                    .attr("class", "frame"); 

FRAME2.selectAll("points")
        .data(data1)
        .enter()
        .append("circle")
            .attr("cx", (d) => {return d;})
            .attr("cy", 0)
            .attr("r", 20)
            .attr("class", "point");

FRAME2.selectAll("points")
        .data(data1)
        .enter()
        .append("circle")
            .attr("cx", (d) => {
                return (d + MARGINS.left)
            })
            .attr("cy", MARGINS.top)
            .attr("r", 20)
            .attr("class", "point"); 

///////

const data2 = [10000, 20000, 40000]; 

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME3 = d3.select("#vis3")
                .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// Define scaling function 

const MAX_X = d3.max(data2, (d) => {return d;}); 
console.log("Max x: " + MAX_X); 

const X_SCALE = d3.scaleLinear()
                    .domain([0, MAX_X])
                    .range([0, VIS_WIDTH]); 

console.log("Input 40000, X_SCALE output: " + X_SCALE(40000)); 

FRAME3.selectAll("points")  
    .data(data2)  
    .enter()       
    .append("circle")  
      .attr("cx", (d) => { return (X_SCALE(d) + MARGINS.left); }) 
      .attr("cy", MARGINS.top) 
      .attr("r", 20)
      .attr("class", "point"); 

// We can also use X_SCALE to add an axis to the vis  
FRAME3.append("g") // g is a "placeholder" svg
      .attr("transform", "translate(" + MARGINS.left + 
            "," + (VIS_HEIGHT + MARGINS.top) + ")") //moves axis 
                                                    // within margins 
      .call(d3.axisBottom(X_SCALE).ticks(4)) // function for generating axis  
        .attr("font-size", '20px'); // set font size














































