var pageHeight = 650;
var currentPage =0;
var currentBlock = 1;
var blockMove = false;
var myScroll;


$(function(){
	setDimensions();
	var startPage = $('#start_page').val();
	var startBlock = $('#start_block').val();
	$('#page_'+startPage).addClass('currentPage');
	navigTo(startPage,startBlock);

	initEvents();
	initMenu();
	
	initScroll();

});


function initEvents()
{

	//$('iframe').contents().find('.connect_widget_button_count_including').hide();

	$(window).bind('resize',function(){
		setDimensions();
	});


	$(".images a").bind('hover', function(){
		$(this).find('.colorImg').fadeTo("fast",1);
	});

	$(".images a").bind('mouseleave', function(){
		$(this).find('.colorImg').fadeTo("fast",0);
	});

	$("#menu ul li ul li a").bind('hover', function(){
		if(!$(this).hasClass('current'))
			$(this).animate({opacity:0.80,top:-1,left:-1,width:12,height:12}, 100);
	});
	$("#menu ul li ul li a").bind('mouseleave', function(){
		if(!$(this).hasClass('current'))
			$(this).animate({opacity:0.20,top:0,left:0,width:10,height:10}, 100);
		else
			$(this).animate({top:0,left:0,width:10,height:10}, 100);
	});

	$('#flecheG, #flecheD, #IDDroite, #PRDroite, #EDDroite, #WEDroite').bind('click', function(){

		navigTo($(this).attr('page'), $(this).attr('block'));
	});


	$('.page').each(function(){
		$(this).bind('click',function(){
			var id = $(this).attr('id');
			var nb = id.split('_');
			navigTo(nb[1],1);

		});
		$(this).css('cursor','pointer');
	});

	var isIpad = navigator.userAgent.match(/iPad/i) != null;
	if(jQuery.browser.mobile || isIpad)
	{
		document.addEventListener('touchmove', function(e){ e.preventDefault(); });

		$("#logo img").live('click',function(){
		if($('#options').css('left')=='10px')
        {
            $("#logo").css('width',380);
            $('#options').animate({left:160, width:186},600, function(){
				$('#optionsContent').fadeIn(400);
			});
        }
		else
        {
			$('#options').animate({left:10, width:0},600, function(){
				$('#optionsContent').fadeOut(400);
                $("#logo").css('width',160);
			});
        }
		});
	 }
	 else
	{
		$("#logo img").bind('hover', function(){
		if($('#options').css('left')=='10px'){
            $("#logo").css('width',380);
			$('#options').animate({left:160, width:186},600, function(){
				$('#optionsContent').fadeIn(400);
			});
		}
		});
		$("#logo").bind('mouseleave', function(){
            
        
		$('#optionsContent').fadeOut(400, function(){
			$('#options').animate({left:10, width:0},600,function(){$("#logo").css('width',160);});

		});
	})
	}


	/*$("#logo img").bind('tapone',function(){
		if($('#options').css('left')=='-65px'){
			$('#options').animate({left:160},600, function(){
				$('#optionsContent').fadeIn(400);
			});
		}
	});*/

//	$("#logo img").live('click',function(){
//		if($('#options').css('left')=='-65px')
//			$('#options').animate({left:160},600, function(){
//				$('#optionsContent').fadeIn(400);
//			});
//		else
//			$('#options').animate({left:-65},600, function(){
//				$('#optionsContent').fadeOut(400);
//			});
//	});




}

function initMenu()
{
	$("#menu ul li ul li a").bind('click', function(){
		var pageid = $(this).attr('page');
		var blockid = $(this).attr('block');

		navigTo(pageid,blockid);
	});
}


function setOpacity()
{
	$('.page').each(function(){
		if($(this).hasClass('currentPage'))
			$(this).animate({'opacity':'1'},0);
		else
			$(this).animate({'opacity':'1'},0);

	});
}

function setDimensions()
{
	var screenW =$(window).width();
	var screenH =$(window).height();
	var ratio = 1600/650;


	pageHeight = 650;

	$('.page, .floatBlock').css({width:screenW,height:pageHeight});
	$('.pageSlider').css({height:pageHeight,width:'1000px'});
	$('.pageSlider').each(function(){
		$(this).css({height:pageHeight,width:$(this).children().length *screenW});
	});

	$('#contactComplete').css('height',screenH-pageHeight);

	$('.pointerBottom').css('top',(pageHeight/2)+(pageHeight/3));
	$('.pointerTop').css('bottom',(pageHeight/2)+(pageHeight/3));
	$('#global-container').css('height',screenH);
	$('#global-slider').css('height',pageHeight*5);
	if(currentBlock!=1)
		$("#page_"+currentPage).scrollTo($("#page_"+currentPage+" #block_"+currentBlock), 0, {axis:'x'});
}


function initScroll()
{
	$(window).bind('mousewheel',function(event, delta) {

		if(!blockMove) detectScroll(delta);
	});

	$(window).bind('swipeone',function(data,event) {

		var toX = Math.abs(event.delta[0].startX);
		var toY = Math.abs(event.delta[0].startY);

		var directionX = event.direction.lastX;
		var directionY = event.direction.lastY;

		if(toX>toY )
		{
			if(directionX>0)
			{
				navigTo(currentPage,currentBlock-1);
			}
			else
			{
				navigTo(currentPage,currentBlock+1);
			}
		}
		else
		{
			if(directionY>0)
			{
				navigTo((currentPage-1),1);
			}
			else
			{
				navigTo((currentPage+1),1);
			}
		}
	});
}


function detectScroll(delta)
{
	var dir = delta > 0 ? 'Up' : 'Down';
	var vel = Math.abs(delta);

	var limitVelo = 0.100;
	var maxVelo = 5;

	if(dir == 'Up' && vel>limitVelo && vel<maxVelo )
	{
		navigTo((parseInt(currentPage)-1),1);
	}
	else if(dir == 'Down' && vel>limitVelo && vel<maxVelo)
	{
		navigTo((parseInt(currentPage)+1),1);
	}
}



function setCurrentPage(page,block)
{

		$("#menu ul li .current").animate({opacity:0.20,top:0,left:0,width:10,height:10}, 300, function(){
			$(this).removeClass('current');
		});

		$('#menu ul li a:[page="'+page+'"][block="'+block+'"]').animate({opacity:0.80}, 200, function(){
			$(this).addClass('current')
		});
		$("div.currentPage").removeClass('currentPage');
		$("#page_"+page).addClass('currentPage');

		$("#page_"+page).unbind('click');
		$("#page_"+page).css('cursor','auto');

		if(page!=currentPage)
		{
			$("#page_"+currentPage).bind('click',function(){
				var id = $(this).attr('id');
				var nb = id.split('_');
				navigTo(nb[1],1);

			});
			$("#page_"+currentPage).css('cursor','pointer');
		}

		setOpacity();
		setDarts(page, block);
		currentBlock= parseInt(block);
		currentPage= parseInt(page);

}


function navigTo(page,block)
{

	if(!blockMove  && $("#page_"+page+" #block_"+block).length>0 && (page!=currentPage || currentBlock!=block) )
	{
		if(page!=currentPage)
			stopScroll();

		if(currentPage!=page )
		{
			$('#flecheG').fadeOut('fast');
			$('#flecheD').fadeOut('fast');
			$('#IDDroite').fadeOut('fast');
			$('#PRDroite').fadeOut('fast');
			$('#EDDroite').fadeOut('fast');
			$('#WEDroite').fadeOut('fast');
		}
		$('.currentPage').animate({opacity:1}, 0, function(){
			$(this).removeClass('currentPage');

			if(page!=currentPage && currentBlock!=1)
			{
				$("#page_"+currentPage).scrollTo($("#page_"+currentPage+" #block_1"), 1000, {axis:'x',queue:true,onAfter:function(){
					$("#global-container").scrollTo("#page_"+page, 500 , {axis:'y', onAfter : function(){
						$("#page_"+page).scrollTo($("#page_"+page+" #block_"+block), 1000, {axis:'x',queue:true,onAfter:function(){
							startScroll();
							setCurrentPage(page,block);
						}});
					}});
				}});
			}
			else if(page!=currentPage || block!=currentBlock)
			{
				$("#global-container").scrollTo("#page_"+page, 800 , {axis:'y', onAfter : function(){
					if(currentBlock==block){ setTimeout("startScroll();",400);setCurrentPage(page,block);  }
					if(block!=currentBlock)
					{
						$("#page_"+page).scrollTo($("#page_"+page+" #block_"+block), 500, {axis:'x',queue:true,onAfter:function(){
								startScroll();
								setCurrentPage(page,block);
						}});
					}
				}});
			}
		});

		jQuery.data(document.body, 'page', page);
		jQuery.data(document.body, 'block', block);
		$('#languages a').each(function(){
			var page = jQuery.data(document.body, 'page');
			var block = jQuery.data(document.body, 'block');
			var lang = $(this).attr('rel');
			var link = "http://www.hear-palmer.com/"+lang+"/"+page+"/"+block;
			$(this).attr('href', link);
		});
	}
}

function setDarts(page, block){
	if(block == 1){
		$('#flecheG').fadeOut('fast');
	}else
		$('#flecheG').fadeIn('fast');

	if($("#page_"+page).find('.floatBlock').length == 1 || $("#page_"+page).find('.floatBlock').length == block){
		$('#flecheD').fadeOut('fast');
	}else{
		$('#flecheD').fadeIn('fast');
	}
	$('#flecheG').attr('page', page).attr('block', parseInt(block, 10)-1);
	$('#flecheD').attr('page', page).attr('block', parseInt(block, 10)+1);
	$('#IDDroite').attr('page', page).attr('block', parseInt(block, 10)+1);
	$('#PRDroite').attr('page', page).attr('block', parseInt(block, 10)+1);
	$('#EDDroite').attr('page', page).attr('block', parseInt(block, 10)+1);
	$('#WEDroite').attr('page', page).attr('block', parseInt(block, 10)+1);
}


function stopScroll()
{
	blockMove=true;

}


function startScroll()
{
	blockMove=false;

}