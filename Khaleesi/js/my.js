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
        onLeave: function(index, nextIndex, direction){
            if(index == '1' && direction == 'down'){
                $('#menu1').removeClass('popUp');
                $('#menu2').addClass('popUp');
                $('#menu3').addClass('popUp');
                console.log('Test1');
            }
            if(index == '2' && direction == 'down'){
                $('#menu1').css('color:#ababab');
                $('#menu2').css('color:#000');
                $('#menu3').css('color:#ababab');
                console.log('Test2');
            }
            if(index == '3' && direction == 'up'){
                $('#menu1').css('color:#ababab !important');
                $('#menu2').css('color:#ababab !important');
                $('#menu3').css('color:#000 !important');
                console.log('Test3');
            }
        }
    });

    $('#arrowDown1').addClass('animated fadeInDown');
    $('#arrowDown2').addClass('animated fadeInDown');
    $('#arrowDown3').addClass('animated fadeInDown');
});