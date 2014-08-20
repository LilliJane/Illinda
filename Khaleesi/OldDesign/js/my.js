$(document).ready(function() {

/* Init Libs */

	new WOW().init();

	$('#fullpage').fullpage({
		menu: true,
		anchors: ['A0', 'A1', 'A2', 'B1', 'C1', 'D1', 'E1'],
    	menu: '#myMenu',
		animateAnchor: true,
        verticalCentered: true,
        css3: true,
        afterRender: function(){
            $('video').get(0).play();
        }
    });

/* To hide the header @SAS */

	if ($('#accueil_sas').hasClass('active')) {
		$('header').hide();
	}
	else {
		$("header").show();
	}
	setInterval(function(){
		if ($('#accueil_sas').hasClass('active')) {
		$('header').hide();
	}
	else {
		$("header").show();
	}
}, 200);


/* Btn Wifi/Hood page A1 - Done */

	$("body").on("click", ".wifiBtn", function() {
		if ($(this).hasClass('active')) {
			console.log("Yes !");
		} else {
			$(this).addClass('active');
			$('.hoodBtn').removeClass('active');
			$('#zoneA1graph').addClass('zoneA1Wifi');
			$('#zoneA1graph').removeClass('zoneA1Hood');
		}
	});


	$("body").on("click", ".hoodBtn", function() {
		if ($(this).hasClass('active')) {
			console.log("Yes !");
		} else {
			$(this).addClass('active');
			$('.wifiBtn').removeClass('active');
			$('#zoneA1graph').addClass('zoneA1Hood');
			$('#zoneA1graph').removeClass('zoneA1Wifi');
		}
	});

/* MiniMap */

	



});

