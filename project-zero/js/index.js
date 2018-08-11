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

    /*focus*/
    var index = 0;
    var textlength = $('.focus li').length;
    var textwidth = $('.focus li').width();
    var timer = null;

    $('.focus').append($('.focus li').first().clone(true));

    function textroll(){
        timer = setInterval(function(){
            index++;
            if(index>textlength){
                index=1;
                $('.focus').css('left','0');
                $('.focus').animate({'left':-index*textwidth}, 1000);
                $('.f_handler i').eq(index).addClass('active').siblings().removeClass();
            }else{
                if(index>textlength-1){
                    $('.focus').animate({'left':-index*textwidth}, 1000);
                    $('.f_handler i').eq(0).addClass('active').siblings().removeClass();
                }else{
                    $('.focus').animate({'left':-index*textwidth}, 1000);
                    $('.f_handler i').eq(index).addClass('active').siblings().removeClass();
                }
            }
        },5000);
    };
    textroll();

    /*鼠标移入动画停止*/
    $('.theory').hover(function(){
        clearInterval(timer);
    },function(){
        textroll();
    });

    /*小按钮*/
    $('.f_handler i').click(function() {
        var i = $(this).index();
        index = i;
        $(this).addClass('active').siblings().removeClass();
        $('.focus').animate({'left':-index*textwidth}, 1000);
    });

});