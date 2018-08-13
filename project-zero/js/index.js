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

	$(".box .section .part5 .page5 .case .case_tab").hover(function(){
		$(this).find(".case_button").stop(true).animate({right:'30px'},300);
	},function(){
		$(this).find(".case_button").stop(true).animate({right:'-34px'},300);
	})

	/*理论点评子页*/
	$(".box .section .lilun .case .case_tab").hover(function(){
		$(this).find(".case_button").stop(true).animate({right:'30px'},300);
	},function(){
		$(this).find(".case_button").stop(true).animate({right:'-34px'},300);
	})

    /* 滚动脚本 */
    var Scroll_li = $(".box .section .part6 .newslist ul li").height();
    $(".newslist").myScroll({
        speed: 40,    //数值越大，速度越慢
        rowHeight: 131    //li的高度
    });

    /* owl-carousel */
    $(".owl-carousel").owlCarousel({
        items : 1,
        loop : true,
        mergeFit : true,
        dots : true,
        autoplay : true,
        autoplayTimeout : 5000,
        autoplayHoverPause : true,
        smartSpeed : 750
    });

    /* ScrollTo */
    $(".nav_top").click(function(){
        $.scrollTo('.ebg',1000);
    });
    $(".nav_part1").click(function(){
        $.scrollTo('.Preface',1000);
    });
    $(".nav_part2").click(function(){
        $.scrollTo('.part2',1000);
    });
    $(".nav_part3").click(function(){
        $.scrollTo('.part3',1000);
    });
    $(".nav_part4").click(function(){
        $.scrollTo('.part4',1000);
    });
    $(".nav_part5").click(function(){
        $.scrollTo('.threebox>div>div>div>span',1000);
    });
    $(".nav_part6").click(function(){
        $.scrollTo('.case_tab>a',1000);
    });
    $(".nav_footer").click(function(){
        $.scrollTo('.footer',1000);
    });

    $(window).scroll(function(){
        if($(window).scrollTop() < 400){
            $(".scroll1").addClass('active');
        }else{
            $(".scroll1").removeClass('active');
        }
        if($(window).scrollTop() > 400 && $(window).scrollTop() < 1100){
            $(".scroll2").addClass('active');
        }else{
            $(".scroll2").removeClass('active');
        }
        if($(window).scrollTop() > 1100 && $(window).scrollTop() < 2100){
            $(".scroll3").addClass('active');
        }else{
            $(".scroll3").removeClass('active');
        }
        if($(window).scrollTop() > 2100 && $(window).scrollTop() < 3150){
            $(".scroll4").addClass('active');
        }else{
            $(".scroll4").removeClass('active');
        }
        if($(window).scrollTop() > 3150 && $(window).scrollTop() < 4250){
            $(".scroll5").addClass('active');
        }else{
            $(".scroll5").removeClass('active');
        }
        if($(window).scrollTop() > 4250 && $(window).scrollTop() < 4850){
            $(".scroll6").addClass('active');
        }else{
            $(".scroll6").removeClass('active');
        }
        if($(window).scrollTop() > 4850 && $(window).scrollTop() < 5100){
            $(".scroll7").addClass('active');
        }else{
            $(".scroll7").removeClass('active');
        }
        if($(window).scrollTop() > 5100 && $(window).scrollTop() < 5400){
            $(".scroll8").addClass('active');
        }else{
            $(".scroll8").removeClass('active');
        }
    });

    /* backtop */
    $(window).scroll(function(){
        if($(window).scrollTop() > 1000){
            $(".backtop").stop(true).fadeIn(500);
        }else{
            $(".backtop").fadeOut(500);
        }
    });
    $(".backtop").click(function(){
        $('body,html').animate({'scrollTop':'0'},400);
    });
});