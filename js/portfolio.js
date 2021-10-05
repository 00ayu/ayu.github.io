/* ayu - portfolio - 2009 */

$(document).ready(function(){
	// hide all sets except for first
	$(".set:gt(0)").hide();
	
	// set tn menu opacity
		$(".tn a").animate({opacity: "0.2"}, 2);
		$("a.right, a.left").animate({opacity: "0.5"}, 2);
	
	// default set
	var divname = "#set1";

	// thumbnail menu interaction
	$(".tn a").click(function () {
		divname= $(this).attr("href");
		$(divname).fadeIn(1500).siblings().fadeOut(900);
		return false;
	});

	// right/next arrow
	$("a.right").click(function () {
		if ( $(divname).is(":last-child") ) {
			divname = $(divname).siblings(":first-child");
		}
		else {
			divname = $(divname).next();
		}
		$(divname).fadeIn(1500).siblings().fadeOut(900);
		return false;
	});

	// left/prev arrow
	$("a.left").click(function () {
		if ( $(divname).is(":first-child") ) {
			divname = $(divname).siblings(":last-child");
		}
		else {
			divname = $(divname).prev();
		}
		$(divname).fadeIn(1500).siblings().fadeOut(900);
		return false;
	});
	
	// nav hovers
	$(".tn a").mouseover(function(){
		$(this).animate({opacity: "0.70"}, 400);
	}).mouseout(function(){
		$(this).animate({opacity: "0.2"}, 400);
	});
	$("a.left, a.right").mouseover(function(){
		$(this).animate({opacity: "0.70"}, 400);
	}).mouseout(function(){
		$(this).animate({opacity: "0.5"}, 400);
	});
});