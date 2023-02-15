/*
D3 Class Demo 2 
Prof. Mosca 
Modified: 02/15/2023
*/

// Declare constants 
const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right:50,
                    top: 50, bottom:50}

const FRAME1 = d3.select("#vis1")
                .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// Reading from a file 
d3.csv("data/circles1.csv").then((data) => {

    // console.log(data); 

    // plot
    FRAME1.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", (d) => {return d.x })
            .attr("cy", (d) => {return d.y })
            .attr("r", 30)
            .attr("fill", (d) => {return d.color});
});

// With a scale function 
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom; 
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME2 = d3.select("#vis2")
                    .append("svg")
                        .attr("height", FRAME_HEIGHT)
                        .attr("width", FRAME_WIDTH)
                        .attr("class", "frame"); 

d3.csv("data/circles2.csv").then((data) => {

    //console.log(data); 

    const MAX_X2 = d3.max(data, (d) => {
                            return parseInt(d.x)
                        }); 

    const X_SCALE2 = d3.scaleLinear()
                        .domain([0, MAX_X2])
                        .range([0, VIS_WIDTH]); 

    FRAME2.selectAll("points")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", (d) => {
                    return (X_SCALE2(d.x) + MARGINS.left)
                })
                .attr("cy", MARGINS.top)
                .attr("r", 20)
                .attr("class", "point"); 

    FRAME2.append("g")
            .attr("transform", "translate(" + 
                MARGINS.left + "," + 
                (VIS_HEIGHT + MARGINS.top) + ")")
            .call(d3.axisBottom(X_SCALE2).ticks(4))
                .attr("font-size", "20px"); 
}); 

// Adding interaction 

const FRAME3 = d3.select("#vis3")
                    .append("svg")
                        .attr("height", FRAME_HEIGHT)
                        .attr("width", FRAME_WIDTH)
                        .attr("class", "frame"); 

function build_plot() {

    d3.csv("data/circles3.csv").then((data) => {

        const MAX_X3 = d3.max(data, (d) => {
                            return parseInt(d.x)
                        }); 
        const X_SCALE3 = d3.scaleLinear()
                            .domain([0, MAX_X3])
                            .range([0, VIS_WIDTH]); 

        FRAME3.selectAll("points")
                .data(data)
                .enter()
                .append("circle")
                    .attr("cx", (d) => {
                        return (X_SCALE3(d.x) + MARGINS.left)
                    })
                    .attr("cy", MARGINS.top)
                    .attr("r", 20)
                    .attr("class", "point"); 

        const TOOLTIP = d3.select("#vis3")
                        .append("div")
                            .attr("class", "tooltip")
                            .style("opacity", 0); 


        //mouseover 
        function handleMouseover(event, d) {
            TOOLTIP.style("opacity", 1); 
        }

        //mousemove
        function handleMousemove(event, d) {
            TOOLTIP.html("Name: " + d.name + "<br>Value: " + d.x)
                    .style("left", (event.pageX + 10) + "px")
                    .style("top", (event.pageY - 50 + "px"));
        }

        //mouseleave 
        function handleMouseleave(event, d) {
            TOOLTIP.style("opacity", 0); 
        }

        // add event listeners to points
        FRAME3.selectAll(".point")
                .on("mouseover", handleMouseover)
                .on("mousemove", handleMousemove)
                .on("mouseleave", handleMouseleave); 
    }); 

}

build_plot(); 




















