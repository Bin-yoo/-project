$(function(){

	document.onreadystatechange = function() {
		document.readyState == "complete";
		$(".loading").fadeOut();
	}

    $(window).resize(function(event) {
        var winwidth = $(window).width();
        if(winwidth <= 260){
            $("#n12 .media-num").css('top', '-92px');
        }
        if(winwidth > 260){
            $("#n12 .media-num").css('top', '-70px');
        }
    });

    var Scroll_li = $(".box .section .part6 .newslist ul li").height();
    $(".newslist").myScroll({
        speed: 40,    //数值越大，速度越慢
        rowHeight: 131    //li的高度
    });

});