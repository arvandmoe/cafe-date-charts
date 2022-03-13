// var   w = 1000,
//       h =  800,
//       circleWidth = 5;

// var palette = {
//       "lightgray": "#E5E8E8",
//       "gray": "#708284",
//       "mediumgray": "#536870",
//       "blue": "#3B757F"
//   }

// var colors = d3.scale.category20();

// var nodes = [
//       { name: "Skills"},
//       { name: "HTML5", target: [0], value: 58 },
//       { name: "CSS3", target: [0, 1], value: 65 },
//       { name: "Scss", target: [0, 1, 2], value: 52 },
//       { name: "Compass", target: [0, 3], value: 48 },
//       { name: "Susy", target: [0,3,4], value: 40 },
//       { name: "Breakpoints", target: [0,3,4,5], value: 36 },
//       { name: "jQuery", target: [0, 1, 2], value: 52 },
//       { name: "Javascript", target: [0, 1, 2, 8], value: 42 },
//       { name: "PHP", target: [0,1,2], value: 35 },
//       { name: "Wordpress", target: [0,1,2,3,9], value: 67 },
//       { name: "Git", target: [0,1,2,3,4,5,6,7,8,10], value: 68 },
//       { name: "Snap.svg", target: [0,1,2,7,8 ], value: 16 },
//       { name: "d3", target: [0,1,2,7,8], value: 25 },
//       { name: "Gulp", target: [0,1,2,3,4,5,6,7,8,9,10,11,12], value: 45 },
//       { name: "AngularJS", target: [0,1,2,7,8], value: 27 },
//       { name: "Adobe CS", target: [0,1,2,12], value: 57 },
//       { name: "mySql", target: [0,9,10], value: 20 },
//       { name: "Grunt", target: [0,9,10], value: 37 },
// ];

// var links = [];

// for (var i = 0; i < nodes.length; i++){
//       if (nodes[i].target !== undefined) {
//             for ( var x = 0; x < nodes[i].target.length; x++ )
//               links.push({
//                   source: nodes[i],
//                   target: nodes[nodes[i].target[x]]
//               });
//       };
// };

// var myChart = d3.select('#container')
//       .append("div")
//         .classed("svg-container", true)

//       .append('svg')
//         .attr("preserveAspectRatio", "xMinYMin meet")
//         .attr("viewBox", "0 0 1000 800")
//         .classed("svg-content-responsive", true)

// var force = d3.layout.force()
//       .nodes(nodes)
//       .links([])
//       .gravity(0.1)
//       .charge(-1000)
//       .size([w,h]);

// var link = myChart.selectAll('line')
//       .data(links).enter().append('line')
//       .attr('stroke', palette.lightgray)
//       .attr('strokewidth', '1');

// var node =  myChart.selectAll('circle')
//       .data(nodes).enter()
//       .append('g')
//       .call(force.drag);

// node.append('circle')
//       .attr('cx', function(d){return d.x; })
//       .attr('cy', function(d){return d.y; })
//       .attr('r', function(d,i){
//             console.log(d.value);
//             if ( i > 0 ) {
//                   return circleWidth + d.value;
//             } else {
//                   return circleWidth + 35;
//             }
//       })
//       .attr('fill', function(d,i){
//             if ( i > 0 ) {
//                   return colors(i);
//             } else {
//                   return '#fff';
//             }
//       })
//       .attr('strokewidth', function(d,i){
//             if ( i > 0 ) {
//                   return '0';
//             } else {
//                   return '2';
//             }
//       })
//       .attr('stroke', function(d,i){
//             if ( i > 0 ) {
//                   return '';
//             } else {
//                   return 'black';
//             }
//       });

// force.on('tick', function(e){
//       node.attr('transform', function(d, i){
//             return 'translate(' + d.x + ','+ d.y + ')'
//       })

//       link
//             .attr('x1', function(d){ return d.source.x; })
//             .attr('y1', function(d){ return d.source.y; })
//             .attr('x2', function(d){ return d.target.x; })
//             .attr('y2', function(d){ return d.target.y; })
// });

// node.append('text')
//       .text(function(d){ return d.name; })
//       .attr('font-family', 'Raleway', 'Helvetica Neue, Helvetica')
//       .attr('fill', function(d, i){
//             console.log(d.value);
//             if ( i > 0 && d.value < 10 ) {
//                   return palette.mediumgray;
//             } else if ( i > 0 && d.value >10 ) {
//                   return palette.lightgray;
//             } else {
//                   return palette.blue;
//             }
//       })
//       .attr('text-anchor', function(d, i) {
//             return 'middle';
//       })
//       .attr('font-size', function(d, i){
//             if (i > 0) {
//                   return '.8em';
//             } else {
//                   return '.9em';
//             }
//       })

// force.start();

var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var svg = d3
  .select("#container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv(
  "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv",
  function (data) {
    console.log(data);
    // Add X axis
    var x = d3.scaleLinear().domain([0, 4000]).range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear().domain([0, 500000]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add dots
    svg
      .append("g")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.GrLivArea);
      })
      .attr("cy", function (d) {
        return y(d.SalePrice);
      })
      .attr("r", 1.5)
      .style("fill", "#69b3a2");
  }
);

// const svg = d3
//   .select("#container")
//   .append("svg")
//   .attr("width", 500)
//   .attr("height", 500);

// const bar1 = svg
//   .append("rect")
//   .attr("fill", "blue")
//   .attr("x", 10)
//   .attr("y", 100)
//   .attr("width", 10)
//   .attr("height", 20);

// const bar2 = svg
//   .append("rect")
//   .attr("fill", "blue")
//   .attr("x", 50)
//   .attr("y", 20)
//   .attr("height", 20)
//   .attr("width", 10);

// function update() {
//   bar1
//     .transition()
//     .ease(d3.easeLinear)
//     .duration(2000)
//     .attr("x", 100);

//   bar2
//     .transition()
//     .ease(d3.easeLinear)
//     .duration(2000)
//     .delay(2000)
//     .attr("height", 100)
//     .attr("width", 100);
// }

// update();
