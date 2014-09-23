$(document).ready(function() {

    // fullPage init
    $('#fullPage').fullpage( {
        sectionsColor: ['#FFF', '#FFF'],
        anchors: ['accueil', 'dataflux'],
        css3: true,
        controlArrowColor: 'black',
        scrollingSpeed: 700,
        afterRender: function() {

            //playing the video
            $('video').get(0).play();
        },
        scrollOverflow: true,
    });

    // CSS' change for the menu
    window.setInterval(function() {
        if ($('#page0').hasClass('active')) {
            $('#myMenu').children().removeClass('active');
            $('#menu1').addClass('active');
        } else if ($('#page1').hasClass('active')) {
            $('#myMenu').children().removeClass('active');
            $('#menu2').addClass('active');
        } else if ($('#page2').hasClass('active')) {
            $('#myMenu').children().removeClass('active');
            $('#menu3').addClass('active');
        }
    }, 1000);

    // Arrow's Js animation
    $('#arrowDown1').addClass('animated fadeInDown');
    $('#arrowDown2').addClass('animated fadeInDown');
    $('#arrowDown3').addClass('animated fadeInDown');

    // Catch Windows viewport
    var winH = windows.innerHeight;
    console.log(varH);
});