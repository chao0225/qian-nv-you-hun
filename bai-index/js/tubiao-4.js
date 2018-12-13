$("#tb").hover(function(){
    var $s=$(this)
    if(!$s.is(":animated"))
      $s.animate({left:5},100)
        .animate({left:-10},100)

		.animate({left:5},100)
        .animate({left:-10},100)

		.animate({left:5},100)
        .animate({left:-10},100)
    else $s.stop(true);
  }) 