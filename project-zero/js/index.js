$(function(){
	
	/* 刷新网页,背景图片文字出现动画 */
	setTimeout(function() {
		$('.text1').animate({'top':'300px','opacity':'1'},2000);
	},100);
	setTimeout(function() {
		$('.text2').animate({'right':'120px','opacity':'1'},2000);
	},1000);
	
	$('.part1 .page1_content_link .content_link').hover(function() {
		$(this).find('p').stop(true).animate({'bottom':'0px'},500);
	},function(){
		$(this).find('p').animate({'bottom':'-80px'},500);
	});
});