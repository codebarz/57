$(document).ready(function() {
	$('.leftButton').click(function() {
		$('.client-slide').animate({
			'marginLeft' : "-=100px"
		});
		$('.client-slide.active').insertAfter($('.client-slide:last-child'));
	});
	$('.rightButton').click(function() {
		$('.client-slide').animate({
			'marginLeft' : "+=100px"
		});
	});
});