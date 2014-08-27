$(document).ready(function() {
    $('#fullPage').fullpage( {
        sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        anchors: ['accueil', 'dataflux', 'turfu'],
        // easing: 'easeInOutBounce',
        css3: true,
        controlArrowColor: 'black',
        scrollingSpeed: 500,
        afterRender: function() {

            //playing the video
            $('video').get(0).play();
        }
    });
    
});