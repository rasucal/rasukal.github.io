$(function(){
	$('#right1').click(function(){
		$('.soccer').fadeOut();	
		$('.snow').fadeIn(1000);
	});

	$('#right2').click(function(){
		$('.snow').fadeOut();
		$('.walk').fadeIn(1000);
	});

	$('#right3').click(function(){
		$('.walk').fadeOut();
		$('.soccer').fadeIn(1000);
	});

	$('#left1').click(function(){
		$('.soccer').fadeOut();
		$('.walk').fadeIn(1000);
	});

	$('#left2').click(function(){
		$('.snow').fadeOut();
		$('.soccer').fadeIn(1000);
	});

	$('#left3').click(function(){
		$('.walk').fadeOut();
		$('.snow').fadeIn(1000);
	});



})
