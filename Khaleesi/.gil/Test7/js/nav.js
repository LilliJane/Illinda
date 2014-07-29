var rightKey, leftKey, topKey, bottomKey, checkScroll = false;

$(document).ready(function(){

	function hideHeader() {
		if ($('#accueil_sas').is(':visible')){
			$('header').hide();
		} else {
			$('header').show();
		}
	}

	hideHeader();
	setInterval(function(){
		hideHeader();
	}, 200);

	//Set up the triggers for the arrow keys
	$(document).keydown(function(e){
		if (e.keyCode == 37 && typeof leftKey === 'function') {
			leftKey();
		} else if(e.keyCode == 38 && typeof topKey === 'function') {
			topKey();
		} else if(e.keyCode == 39 && typeof rightKey === 'function') {
			rightKey();
		} else if(e.keyCode == 40 && typeof bottomKey === 'function') {
			bottomKey();
		}
	});

	parallax.add($('#accueil_sas'))
			.add($('#accueil_ville1'))
			.add($('#accueil_ville2'))
			.add($('#durable_depl'))
			.add($('#durable_educ'))
			.add($('#durable_eco'))
			.add($('#durable_sante'))
			.add($('#durable_culture'))
			.add($('#soc_depl'))
			.add($('#soc_educ'))
			.add($('#soc_eco'))
			.add($('#soc_sante'))
			.add($('#soc_culture'))
			.add($('#perf_depl'))
			.add($('#perf_educ'))
			.add($('#perf_eco'))
			.add($('#perf_sante'))
			.add($('#perf_culture'))
			.add($('#connect_depl'))
			.add($('#connect_educ'))
			.add($('#connect_eco'))
			.add($('#connect_sante'))
			.add($('#connect_culture'));

	//Clears each page navigation on load
	parallax.preload = function(){
		rightKey = leftKey = topKey = bottomKey = "";
		$(".control").hide();
	};

	//Setting navigation for each pages

	//Accueil
	parallax.accueil_sas.onload=function(){
		setBottom("accueil_ville1", "Ville 1");
	};

	parallax.accueil_ville1.onload=function(){
		setTop("accueil_sas", "SAS");
		setBottom("accueil_ville2","Ville 2");
	};

	parallax.accueil_ville2.onload=function(){
		setTop("accueil_ville1", "Ville 1");
		setBottom("durable_depl","Durable 1");
	};

	//Durable
	parallax.durable_depl.onload=function(){
		setTop("accueil_ville2", "Ville 2");
		setBottom("soc_depl","Sociale 1");
		setRight("durable_educ", "Durable 2");
	};

	parallax.durable_educ.onload=function(){
		setTop("accueil_ville2", "Ville 2");
		setBottom("soc_educ","Sociale 2");
		setRight("durable_eco", "Durable 3");
		setLeft("durable_depl", "Durable 1");
	};

	parallax.durable_eco.onload=function(){
		setTop("accueil_ville2", "Ville 2");
		setBottom("soc_eco","Sociale 3");
		setRight("durable_sante", "Durable 4");
		setLeft("durable_educ", "Durable 2");
	};

	parallax.durable_sante.onload=function(){
		setTop("accueil_ville2", "Ville 2");
		setBottom("soc_sante","Sociale 4");
		setRight("durable_culture", "Durable 5");
		setLeft("durable_eco", "Durable 3");
	};

	parallax.durable_culture.onload=function(){
		setTop("accueil_ville2", "Ville 2");
		setBottom("soc_culture","Sociale 5");
		setLeft("durable_sante", "Durable 4");
	};


	//Sociale
	parallax.soc_depl.onload=function(){
		setTop("durable_depl", "Durable 1");
		setBottom("perf_depl","Perf 1");
		setRight("soc_educ", "Sociale 2");
	};

	parallax.soc_educ.onload=function(){
		setTop("durable_educ", "Durable 2");
		setBottom("perf_educ","Perf 2");
		setRight("soc_eco", "Sociale 3");
		setLeft("soc_depl", "Sociale 1");
	};

	parallax.soc_eco.onload=function(){
		setTop("durable_eco", "Durable 3");
		setBottom("perf_eco","Perf 3");
		setRight("soc_sante", "Sociale 4");
		setLeft("soc_educ", "Sociale 2");
	};

	parallax.soc_sante.onload=function(){
		setTop("durable_sante", "Durable 4");
		setBottom("perf_sante","Perf 4");
		setRight("soc_culture", "Sociale 5");
		setLeft("soc_eco", "Sociale 3");
	};

	parallax.soc_culture.onload=function(){
		setTop("durable_culture", "Durable 5");
		setBottom("perf_culture","Perf 5");
		setLeft("soc_sante", "Sociale 4");
	};

	//Perf
	parallax.perf_depl.onload=function(){
		setTop("soc_depl", "Sociale 1");
		setBottom("connect_depl","Connect 1");
		setRight("perf_educ", "Perf 2");
	};

	parallax.perf_educ.onload=function(){
		setTop("soc_educ", "Sociale 2");
		setBottom("connect_educ","Connect 2");
		setRight("perf_eco", "Perf 3");
		setLeft("perf_depl", "Perf 1");
	};

	parallax.perf_eco.onload=function(){
		setTop("soc_eco", "Sociale 3");
		setBottom("connect_eco","Connect 3");
		setRight("perf_sante", "Perf 4");
		setLeft("perf_educ", "Perf 2");
	};

	parallax.perf_sante.onload=function(){
		setTop("soc_sante", "Sociale 4");
		setBottom("connect_sante","Connect 4");
		setRight("perf_culture", "Perf 5");
		setLeft("perf_eco", "Perf 3");
	};

	parallax.perf_culture.onload=function(){
		setTop("soc_culture", "Sociale 5");
		setBottom("connect_culture","Connect 5");
		setLeft("perf_sante", "Perf 4");
	};

	//Connect
	parallax.perf_depl.onload=function(){
		setTop("perf_depl", "Perf 1");
		setRight("perf_educ", "Connect 2");
	};

	parallax.perf_educ.onload=function(){
		setTop("perf_educ", "Perf 2");
		setRight("perf_eco", "Connect 3");
		setLeft("perf_depl", "Connect 1");
	};

	parallax.perf_eco.onload=function(){
		setTop("perf_eco", "Perf 3");
		setRight("perf_sante", "Connect 4");
		setLeft("perf_educ", "Connect 2");
	};

	parallax.perf_sante.onload=function(){
		setTop("perf_sante", "Perf 4");
		setRight("perf_culture", "Connect 5");
		setLeft("perf_eco", "Connect 3");
	};

	parallax.perf_culture.onload=function(){
		setTop("perf_culture", "Perf 5");
		setLeft("perf_sante", "Connect 4");
	};




	//Sets the correct triggers for the arrows, plus arrow keys
	function setRight(page, text){
		$("#rightText").text(text);
		$("#rightControl").show().unbind('click').click(function(){
			parallax[page].right();
		});
		rightKey = function(){
			parallax[page].right();
		};
	}

	function setLeft(page, text){
		$("#leftText").text(text);
		$("#leftControl").show().unbind('click').click(function(){
			parallax[page].left();
		});
		leftKey = function(){
			parallax[page].left();
		};
	}

	function setTop(page, text){
		$("#topText").text(text);
		$("#topControl").show().unbind('click').click(function(){
			parallax[page].top();
		});
		topKey = function(){
			parallax[page].top();
		};
	}

	function setBottom(page, text){
		$("#bottomText").text(text);
		$("#bottomControl").show().unbind('click').click(function(){
			parallax[page].bottom();
		});
		bottomKey = function(){
			parallax[page].bottom();
		};
	}

	//The fadey bits
	$("#bottomControl").mouseenter(function(){
		$("#bottomArrow").fadeTo(500,1);
		$("#bottomText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#bottomArrow").stop().fadeTo(500,0.2);
		$("#bottomText").stop().fadeTo(500,0);
	});

	$("#leftControl").mouseenter(function(){
		$("#leftArrow").fadeTo(500,1);
		$("#leftText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#leftArrow").stop().fadeTo(500, 0.2);
		$("#leftText").stop().fadeTo(500,0);
	});

	$("#rightControl").mouseenter(function(){
		$("#rightArrow").fadeTo(500,1);
		$("#rightText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#rightArrow").stop().fadeTo(500, 0.2);
		$("#rightText").stop().fadeTo(500,0);
	});

	$("#topControl").mouseenter(function(){
		$("#topArrow").fadeTo(500,1);
		$("#topText").fadeTo(500,1);
	}).mouseleave(function(){
		$("#topArrow").stop().fadeTo(500, 0.2);
		$("#topText").stop().fadeTo(500,0);
	});


	$(".control").hide();
	parallax.accueil_sas.show();
});

