$(document).ready(function(){

	// This code is run when the page is loaded
	// "Listen" for a click event on the click-me button and alert the message	

	$("#change-red").on("click",function(){
		$("#changing-red").css("background-color","red");
	});

	$("#change-green").on("click",function(){
		$("#changing-green").css("background-color","green");
	});

	$("#change-blue").on("click",function(){
		$("#changing-blue").css("background-color","blue");
	});

	$("#make-big").on("click",function(){
		$("#changing-big").addClass("makeBig");
	});

	$("#make-small").on("click",function(){
		$("#changing-small").addClass("makeSmall");
	});

	$("#animate-div").on("click",function(){
		$("#changing-animate").addClass("rotate");
	});

	$("#create-overlay").on("click",function(){
	 	$(".overlay-box").show("slow", function() {
	 	});
	 });

	$(".overlay-box").on("click",function(){
	 	$(".overlay-box").hide("slow", function() {
	 	});
	 });

});