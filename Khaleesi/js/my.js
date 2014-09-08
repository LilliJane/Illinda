$(document).ready(function() {
    $('#fullPage').fullpage( {
        sectionsColor: ['#FFF', '#FFF', '#FFF'],
        anchors: ['accueil', 'dataflux', 'turfu'],
        // easing: 'easeInOutBounce',
        css3: true,
        controlArrowColor: 'black',
        scrollingSpeed: 700,
        afterRender: function() {

            //playing the video
            $('video').get(0).play();
        },
        scrollOverflow: true,
    });

    // window.setInterval(function() {
    //     if ($('#page0').hasClass('active')) {
    //         console.log('toto');
    //     }
    // }, 1000);

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
    }, 300);

    $('#arrowDown1').addClass('animated fadeInDown');
    $('#arrowDown2').addClass('animated fadeInDown');
    $('#arrowDown3').addClass('animated fadeInDown');
});