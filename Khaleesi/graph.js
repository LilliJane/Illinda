 d3.csv("data/data.csv", function(data) {

 	var h = 600;
 	var w = 500;

 	var heightScale = d3.scale.linear()
 					.domain([0, 0.20800])
 					.range([0, h]);

 	var colorScale = d3.scale.linear()
 					.domain([0, 0.20800])
 					.range(["red", "blue"]);

 	var axis = d3.svg.axis()
 				.ticks(5)
				.scale(heightScale);

 	var svg = d3.select("#toto")
 				.append("svg")
 				.attr("width", w)
 				.attr("height", h)
 				.append("g")
 				.attr("transform", "translate(50, 50)")
 				


 	var bars = svg.selectAll("rect")
	 		.data(data)
	 		.enter()
	 			.append("rect")
	 			.attr("height", function (d) {
	 				return heightScale(d.frequency);
	 			})
		 		.attr("width", 10)
		 		.attr("x", function (d, i) {
		 			return i * 15
		 		})
		 		.attr("fill", function (d) {
		 			return colorScale(d.frequency)
		 		});

	svg.append("g")
		.attr("transform", "translate(0, 500)")
		.call(axis)
 })


 // d3.csv("data/data2.csv", function(data) {

 // 	var h = 500;
 // 	var w = 500;
 // 	var r = 200;

 // 	var colorScale2 = d3.scale.ordinal()
 // 						.range(["blue", "yellow", "red", "green"]);

 // 	var svg = d3.select.("#graph2")
 // 				.append("svg")
 // 				.attr("width", w)
 // 				.attr("height", h);

 // 	var group = svg.append("g")
 // 				.attr("transform", "translate(100, 100)");

 // 	var arc = d3.svg.arc()
 // 				.innerRadius(0)
 // 				.outterRadius(r);

 // 	var pie = d3.layout.pie()
 // 				value( function(d){
 // 					return d;
 // 				});

 // 	var arcs = group.selectAll(".arc")
 // 					.data(pie(data))
 // 					.enter()
 // 						.append("g")
 // 						.attr("class", "arc");

 // 	arcs.append("path")
 // 		.attr("d", arc)
 // 		.attr("fill", function(d) {
 // 			return "translate("+arc.centroid(d)+")";
 // 		})
 // 		.attr("text-anchor", "middle")
 // 		.attr("font-size" "1.5em")
 // 		.text(function(d) {
 // 			return d.data;
 // 		})







 // })