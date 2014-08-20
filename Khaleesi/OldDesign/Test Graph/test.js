 d3.csv("data.csv", function(data) {

 	var h = 600;
 	var w = 1000;

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
 				.attr("transform", "translate(20, 10)")
 				


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