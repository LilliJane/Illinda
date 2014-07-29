$(document).ready(function(){
 	$('li.button').mouseenter(function(){
 		$(this).addClass('hightlight');
 	});
 	$('li.button').mouseleave(function(){
 		$(this).removeClass('hightlight');
 	});
});



// $(document).ready(function(){
// 	$("#menu").on("mouseenter", "a", function() {
//     	$(this).toggleClass("hightlight");
//   });
// 	$("#menu").on("mouseleave", "a", function() {
//     	$(this).removeClass("hightlight");
//     });
// });

// $(document).ready(function(){
// 	$("#menu").on("mouseenter", "li", function() {
//     	$(this).find("a").css("background", "#252b30");
//   });
// });

// $(document).ready(function(){
// 	$("#menu").on("mouseenter", function() {
//     	$(this).find("a").toggleClass("hightlight");
// });