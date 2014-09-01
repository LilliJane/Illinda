$(document).ready(function() {
    $('#fullPage').fullpage( {
        sectionsColor: ['#FFF', '#FFF', '#FFF'],
        anchors: ['accueil', 'dataflux', 'turfu'],
        // easing: 'easeInOutBounce',
        css3: true,
        controlArrowColor: 'black',
        scrollingSpeed: 500,
        afterRender: function() {

            //playing the video
            $('video').get(0).play();
        },
        scrollOverflow: true,
        afterLoad: function(anchorLink, index){
            if(index == '1'){
                $('#menu1').css('color:#000');
                $('#menu2').css('color:#ababab');
                $('#menu3').css('color:#ababab');
            }
            if(index == '2'){
                $('#menu1').css('color:#ababab');
                $('#menu2').css('color:#000');
                $('#menu3').css('color:#ababab');
            }
            if(index == '3'){
                $('#menu1').css('color:#ababab');
                $('#menu2').css('color:#ababab');
                $('#menu3').css('color:#000');
            }
        }
    });

    $('#arrowDown1').addClass('animated fadeInDown');
    $('#arrowDown2').addClass('animated fadeInDown');
    $('#arrowDown3').addClass('animated fadeInDown');
});