$(document).ready( function() {

/* Ancien code pour cacher le header - A modifier */

// if ($('#page_1').hasClass('currentPage')) {
// 		$('header').hide();
// 	} else {
// 		$('header').show();
// 	}
// 	setInterval(function(){
// 		if ($('#page_1').hasClass('currentPage')) {
// 			$('header').hide();
// 		} else {
// 			$('header').show();
// 		}
// 	}, 200);



/* Ancien code pour les bouton Wifi/Hood - A modifier */

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

// $('#wifi_logo').on('click', function(){
// 	if ($('#wifi_on').hasClass('dis')){
// 		$(this).removeClass('dis').hide();
// 		$('#wifi_off').addClass('dis').show();
// 		$('#zone21Wifi').hide();
// 		$('#zone21Hood').show();
// 	} else if ($('#wifi_off').hasClass('dis')) {
// 		$(this).removeClass('dis').hide();
// 		$('#wifi_on').addClass('dis').show();
// 		$('#zone21Wifi').show();
// 		$('#zone21Hood').hide();
// 	}
// });

// $('#hood_logo').on('click', function(){
// 	if ($('#hood_on').hasClass('dis')){
// 		$(this).removeClass('dis').hide();
// 		$('#wifi_off').addClass('dis').show();
// 		$('#zone21Wifi').hide();
// 		$('#zone21Hood').show();
// 	} else if ($('#hood_off').hasClass('dis')) {
// 		$(this).removeClass('dis').hide();
// 		$('#wifi_on').addClass('dis').show();
// 		$('#zone21Wifi').show();
// 		$('#zone21Hood').hide();
// 	}
// });


});
