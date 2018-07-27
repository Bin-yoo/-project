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


	$(".part3 .eight_point .kuang").hover(function(){
		$(this).css("border","3px solid red");
		$(this).find("div").css("background-color","red");
		$(this).find("div").css("color","yellow");
	},function(){
		$(this).css("border","3px solid yellow");
		$(this).find("div").css("background-color","yellow");
		$(this).find("div").css("color","red");
	})

    $(window).resize(function(event) {
        var winwidth = $(window).width();
        if(winwidth <= 260){
            $("#n12 .media-num").css('top', '-92px');
        }
        if(winwidth > 260){
            $("#n12 .media-num").css('top', '-70px');
        }
    });

});