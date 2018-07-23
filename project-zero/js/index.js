$(function(){

	document.onreadystatechange = function() {
		document.readyState == "complete";
		$(".loading").fadeOut();
	}

    $('.part1 .content_link').hover(function() {
        $(this).find('p').stop(true).animate({'bottom':'0px'},500);
    },function(){
        $(this).find('p').animate({'bottom':'-90px'},500);
    });

});