$(document).on('mouseover', '.tab', function() {
		  $('.wxinz').removeClass('active');
		  $(this).children('.wxinz').addClass('active');
		  $('.box').hide();
		  $("." + $(this).attr('data-tab')).show();
		  $('.huahun').addClass('huahun-1')
		  $('.dingwei').addClass('dingwei-1')
		  $('.xiangxi').addClass('xiangxi-1')
		  $('.shuchu').addClass('shuchu-1')
		  $('.touxiang').addClass('touxiang-1')
	});
	$('.ul').mouseover(function(e){
			$('.huahun').parent().siblings().children().removeClass("huahun-1");
			$('.dingwei').parent().siblings().children().removeClass("dingwei-1");
			$('.xiangxi').parent().siblings().children().removeClass("xiangxi-1");
			$('.shuchu').parent().siblings().children().removeClass("shuchu-1");
			$('.touxiang').parent().siblings().children().removeClass("touxiang-1");
  });
  
	/*右边的固定图片*/
	var xdl=document.querySelector(".xdl");
		xdl.onclick=function(){
			var xdl=this;
			//var b=document.querySelector(".b");
			var TOP=document.getElementById("TOP");
			if(TOP.style.right=="0px"){
				TOP.style.right="-215px";
			  xdl.style.background="url(img/index/boot_z_52e36cf.png) no-repeat 0px -131px";
			}else{
				TOP.style.right="0px";
				xdl.style.background="url(img/index/boot_z_52e36cf.png) no-repeat 0px 0px";
			}
		}

	

	$(document).on('mouseover', '.tab-1', function() {
		  $('.wxinz-1').removeClass('active');
		  $(this).children('.wxinz-1').addClass('active');
		  $('.box-1').hide();
		  $("." + $(this).attr('data-tab')).show();
	});

	
	/*ease-in-out */
    
	// $('#jq_hover').hover(function(){
	// 		$('div.huahun').addClass('huahun-1');
	// 		console.log(500);
	// 	},function(){
	// 		$('.huahun').removeClass('huahun-1');
	// 		console.log(0225);
	// 	})
	
