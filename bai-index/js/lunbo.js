
$(document).ready(function(){
     var slideBox = $(".lunbo");//最外层的div
     var ul = slideBox.find("ul");//搜索最外层的div下所有段落中的后代 ul 元素
     var oneWidth = slideBox.find("ul li").eq(0).width();//搜索最外层的div下所有段落中的后代 ul li第一个 元素 的宽度
     var number = slideBox.find(".aBox a"); 
	 //搜索最外层的div下所有段落中的后代下 .spanBox p  元素
	 //注意分号 和逗号的用法
     var timer = null;
     var sw = 0;                    
     //每个span绑定click事件，完成切换颜色和动画，以及读取参数值
     number.on("mouseover",function (){
		 $(this).addClass("active").siblings("a").removeClass("active");
		 sw=$(this).index();
		ul.stop().animate({
            "right":oneWidth*sw,   //ul标签的动画为向左移动；
        });
     });
  
    //定时器的使用，自动开始
   function fun(){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("mouseover");
    }
    timer = setInterval(function (){
        fun();
        },4000);
    }) 
   
    
