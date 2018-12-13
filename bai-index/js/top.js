$(".box-10:gt(0)").hide();//除了第一个全部隐藏

/*$("#top-1").on("mouseover",".title",function(){
	console.log(123)
	var $title=$(this);
	$title.parent() //当前content
				.hide() //切换: 如果现在是隐藏，就换为显示，如果现在是显示，就换为隐藏
				.siblings(".box-10") //其它content
				.show();	
})*/

$("#asdsa").on("mouseover",function(){
	$("#chujing").hide();
	$("#erweima").show();	
})
$("#chujing11").on("mouseover",function(){
	$("#chujing").show();
	$("#erweima").hide();
	
})

/*英雄介绍 */

$(".touxiang:odd").hide();
$(".nc-1").addClass('active');
$(".nc-1").on("mouseover",function(){
	$('.nc-2').removeClass('active');
	$(".mx-1").show();
	$(".mx-2").hide();
	$(this).addClass('active');
})
$(".nc-2").on("mouseover",function(){
	$(this).addClass('active');
	$(".mx-2").show();
	$(".mx-1").hide();
	$('.nc-1').removeClass('active');
})


/* 置顶  */
$('.tp-top').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $('html').offset().top
	}, 700);
	return false;
});
