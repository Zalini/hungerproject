$(document).ready(function() {
	$(".one").hide().fadeIn(4000);
	$(".two").hide().fadeIn(5000);
	$(".three").hide().fadeIn(6000);
	$(".four").hide().fadeIn(7000);

	$("#menuIcon").on("click", function(){
		$("#toggleMenu").slideToggle();	
	});
});