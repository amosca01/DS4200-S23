/*
D3 Class Demo 2 
Prof. Mosca 
Modified: 10/04/2022
*/

const FRAME_HEIGHT = 200; 
const FRAME_WIDTH = 500; 
const MARGINS = {left: 50, right: 50, top: 50, bottom:50};

const FRAME1 = d3.select("#vis1")
                .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 


// open file and plot 
d3.csv("data/circles1.csv").then((data) => {

    // check data 
    // console.log(data); 

    FRAME1.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", (d) => { return d.x; })
                .attr("cy", (d) => { return d.y; })
                .attr("r", 30)
                .attr("fill", (d) => {return d.color; });

});

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right; 

const FRAME2 = d3.select("#vis2")
                .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 


// open another file
d3.csv("data/circles2.csv").then((data) => {

    console.log(data); 

    // find max
    const MAX_X = d3.max(data, (d) => {
        return parseInt(d.x); 
    }); 

    console.log(MAX_X);

    const X_SCALE2 = d3.scaleLinear()
                        .domain([0, (MAX_X + 10000)])
                        .range([0, VIS_WIDTH]);  

    FRAME2.selectAll("points")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", (d) => {
                    return (X_SCALE2(d.x) + MARGINS.left);
                })
                .attr("cy", MARGINS.top)
                .attr("r", 20)
                .attr("class", "point"); 

    // axis 
    FRAME2.append("g")
        .attr("transform", "translate(" + MARGINS.left +
            "," + (VIS_HEIGHT + MARGINS.top) + ")")
        .call(d3.axisBottom(X_SCALE2).ticks(4))
            .attr("font-size", "20px"); 

});

// interactive plot 

const FRAME3 = d3.select("#vis3")
                .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame"); 

// using a function to build plot 

function build_interactive_plot() {

    d3.csv("data/circles3.csv").then((data) => {

        const MAX_X = d3.max(data, (d) => {
            return parseInt(d.x); 
        });

        // define scale 
        const X_SCALE = d3.scaleLinear()
                            .domain([0, (MAX_X + 10000)])
                            .range([0, VIS_WIDTH]); 

        // plot 
        FRAME3.selectAll("points")
            .data(data)
            .enter()
            .append("circle")
                .attr("cx", (d) => {
                    return (X_SCALE(d.x) + MARGINS.left);
                })
                .attr("cy", MARGINS.top)
                .attr("r", 20)
                .attr("class", "i_point"); 

        // Tooltip 

        const TOOLTIP = d3.select("#vis3")
                            .append("div")
                                .attr("class", "tooltip")
                                .style("opacity", 0); 

        function mouseover(event, d) {
            // on mouseover make tooltip opaque
            TOOLTIP.style("opacity", 1); 
        }

        function mousemove(event, d) {
            //posiition our tooltip 
            TOOLTIP.html("Name: " + d.name + "<br>Value: " + d.x)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 50) + "px"); 
        }

        function mouseleave(event, d) {
            // tooltip to be transparant 
            TOOLTIP.style("opacity", 0);
        }

        FRAME3.selectAll(".i_point")
                .on("mouseover", mouseover)
                .on("mousemove", mousemove)
                .on("mouseleave", mouseleave); 

        //add axis
        FRAME3.append("g")
            .attr("transform", "translate(" + MARGINS.left +
                "," + (VIS_HEIGHT + MARGINS.top) + ")")
            .call(d3.axisBottom(X_SCALE).ticks(4))
                .attr("font-size", "20px"); 
    });
}

build_interactive_plot(); 



















