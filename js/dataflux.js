$(document).ready(function(){

/*================================================
=            SECTION - Follow the dot            =
================================================*/
 
// VARS
var quantity = 100, //number of dots
	duration = 60,  //duration (in seconds)
	path = [{x:0, y:250}, {x:50, y:350}, {x:300, y:280}, {x:400, y:570}, {x:500, y:250}], 
		//points on the path (BezierPlugin will plot a Bezier through these). Adjust however you please.
	position = {x:path[0].x, y:[path[0].y]},
		//tracks the current position, so we set it initially to the first node in the path. It's the target of the tween.
	tween = TweenMax.to(position, quantity, {bezier:path, ease:Linear.easeNone}),
		//this does all the work of figuring out the positions over time.
	tl = new TimelineMax({repeat:-1, yoyo:false}),
		// (repeat) -- -1 pour repeat infinis, 0 pour un display normal 
		// (yoyo) -- Fais l'animation en reverse
		//we'll use a TimelineMax to schedule things.
		//You can then have total control of playback. pause(), resume(), reverse(), whatever.
	i,
	dot;

	// remove the first dot -trick
	path.shift();

	// Loop Machine for Tween
	for (i = 0; i < quantity; i++) {
		tween.time(i); //jumps to the appropriate time in the tween, causing position.x and position.y to be updated accordingly.
		dot = $("<div />", {id:"dot"+i}).addClass("adotf")
					.css({left:position.x+"px", top:position.y+"px"})
					.appendTo("#pageOne"); //EDIT for the good div : PageOne ...
					//create a new dot, add the .adot class, set the position, and add it to the body.
		tl.set(dot, {visibility:"visible"}, i * (duration / quantity)); //toggle the visibility on at the appropriate time.
		tl.to(dot, .5, {autoAlpha:0, display:"none"});
	}

	/* Test Point n2 */
var quantity2 = 100, //number of dots
	duration2 = 60,  //duration (in seconds)
	path2 = [{x:850, y:457}, {x:550, y:350}, {x:537, y:280}, {x:450, y:570}, {x:280, y:657}, {x:90, y:250}, {x:0, y:250}], 
		//points on the path (BezierPlugin will plot a Bezier through these). Adjust however you please.
	position2 = {x:path2[0].x, y:[path2[0].y]},
		//tracks the current position, so we set it initially to the first node in the path. It's the target of the tween.
	tween2 = TweenMax.to(position2, quantity2, {bezier:path2, ease:Linear.easeNone}),
		//this does all the work of figuring out the positions over time.
	tl2 = new TimelineMax({repeat:-1, yoyo:false}),
		// (repeat) -- -1 pour repeat infinis, 0 pour un display normal 
		// (yoyo) -- Fais l'animation en reverse
		//we'll use a TimelineMax to schedule things.
		//You can then have total control of playback. pause(), resume(), reverse(), whatever.
	i2,
	dot2;

	// remove the first dot -trick
	path.shift();

	// Loop Machine for Tween
	for (i2 = 0; i2 < quantity2; i2++) {
		tween2.time(i2); //jumps to the appropriate time in the tween, causing position.x and position.y to be updated accordingly.

		dot2 = $("<div />", {id:"dot"+i2}).addClass("adot")
					.css({left:position2.x+"px", top:position2.y+"px"})
					.appendTo("#pageOne"); //EDIT for the good div : PageOne ...
					//create a new dot, add the .adot class, set the position, and add it to the body.
		tl2.set(dot2, {visibility:"visible"}, i2 * (duration2 / quantity2)); //toggle the visibility on at the appropriate time.
		tl2.to(dot2, .5, {autoAlpha:0, display:"none"}); //pour effacer les traces du gris
	}

// Timeline
var viewModel = function() {
    self = this;

    self.percentage = ko.observable(0);

    self.percentage.subscribe(function () {
      if (self.percentage() === 100) {
        clearTimeout(timer);
      }
    });
  };

  ko.bindingHandlers.progressBar = {
    init: function(element) {
      return { controlsDescendantBindings: true };
    },
    update : function(element, valueAccessor, bindingContext) {
      var options = ko.unwrap(valueAccessor());

      var value = options.value();

      var width = value + "%";
      
      $(element).addClass("progressBar");

      ko.applyBindingsToNode(element, {
        html : '<div data-bind="style: { width: \'' + width + '\' }"></div><div class="progressText" data-bind="text: \'' + value + ' %\'"></div>'
      });

      ko.applyBindingsToDescendants(bindingContext, element);
    }
  };

  var viewModelObj = new viewModel();

  ko.applyBindings(viewModelObj);

  var timer = setInterval(function() { viewModelObj.percentage(viewModelObj.percentage() + 1); }, 50);

	// --------- OLD STUFF AFTER -----

// /*=============================================
// =            Create dots + animate            =
// =============================================*/

// 	/**
// 	*
// 	* Vars
// 	*
// 	**/

// 	var points = [],
//     velocity2 = 5,
//     canvas = 
// 			document.getElementById('particules'),
// 		  context = canvas.getContext('2d'),
// 		  radius = 1.5,
// 		  boundaryX = 200,
// 		  boundaryY = 200,
// 		  numberOfPoints = 90;

// 	init();

// 	/**
// 	*
// 	* \BEGIN -- Init 
// 	*
// 	**/

// 	function init() {

// 	  // create points
// 	  for (var i = 0; i<numberOfPoints; i++) {
// 	    createPoint();
// 	  }

// 	  // create connections
// 	  for (var i = 0, l=points.length; i<l; i++) {
// 	    var point = points[i];
// 	    if(i == 0) {
// 	      points[i].buddy = points[points.length-1];
// 	    } else {
// 	      points[i].buddy = points[i-1];
// 	    }
// 	  }

// 	  // GOTO animate
// 	  animate();
// 	}

// 	/**
// 	*
// 	* Step -- Create the Dot
// 	*
// 	**/
	
// 	function createPoint() {
// 	  var point = {}, vx2, vy2;

// 	  point.x = Math.random()*boundaryX;
// 	  point.y = Math.random()*boundaryY;
// 	  point.vx = (Math.floor(Math.random())*2-1)*Math.random();
// 	  vx2 = Math.pow(point.vx, 2);
// 	  vy2 = velocity2 - vx2;
// 	  point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
// 	  points.push(point);
// 	}

// 	/**
// 	*
// 	* Step -- Math - reset the velocity (moove + speed)
// 	*
// 	**/
	

// 	function resetVelocity(point, axis, dir) {
// 	  var vx, vy;
// 	  if(axis == 'x') {
// 	    point.vx = dir*Math.random();  
// 	    vx2 = Math.pow(point.vx, 2);
// 	  vy2 = velocity2 - vx2;
// 	  point.vy = Math.sqrt(vy2) * (Math.random()*2-1);
// 	  } else {
// 	    point.vy = dir*Math.random();  
// 	    vy2 = Math.pow(point.vy, 2);
// 	  vx2 = velocity2 - vy2;
// 	  point.vx = Math.sqrt(vx2) * (Math.random()*2-1);
// 	  }
// 	}

// 	/**
// 	*
// 	* Step -- Draw a Circle
// 	*
// 	**/

// 	function drawCircle(x, y) {
// 	  context.beginPath();
// 	  context.arc(x, y, radius, 0, 2 * Math.PI, false);
// 	  context.fillStyle = '#000';
// 	  context.fill();  
// 	}

// 	/**
// 	*
// 	* Step -- Draw Circles & reset the Velocity for each dot
// 	*
// 	**/

// 	function draw() {
// 	  for(var i =0, l=points.length; i<l; i++) {
	    
// 	    // circles
// 	    var point = points[i];
// 	    point.x += point.vx;
// 	    point.y += point.vy;
// 	    drawCircle(point.x, point.y);

// 	    // check for edge
// 	    if(point.x < 0+radius) {
// 	      resetVelocity(point, 'x', 1);
// 	    } else if(point.x > boundaryX-radius) {
// 	      resetVelocity(point, 'x', -1);
// 	    } else if(point.y < 0+radius) {
// 	      resetVelocity(point, 'y', 1);
// 	    } else if(point.y > boundaryY-radius) {
// 	      resetVelocity(point, 'y', -1);
// 	    } 
// 	  }
// 	}

// 	/**
// 	*
// 	* \END -- Lauch the animation!/END
// 	*
// 	**/

// 	function animate() {
// 	  context.clearRect ( 0 , 0 , 600 , 600 );
// 	  draw();
// 	  requestAnimationFrame(animate);
// 	}

});