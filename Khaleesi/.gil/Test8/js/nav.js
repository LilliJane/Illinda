$(document).ready(function(){
	if ($('#accueil_sas').hasClass('active')) {
		$('header').hide();
	} else {
		$('header').show();
	}
	setInterval(function(){
		if ($('#accueil_sas').hasClass('active')) {
			$('header').hide();
		} else {
			$('header').show();
		}
	}, 500);
});
