$(".btn").click(function(){
    $(".alert").addClass("in");
})
$("#xx").click(function(){
    $(this).parent().removeClass("in")
})

$(document).on('mouseover', '.tab-2', function() {
    $('.wxinz-2').removeClass('active');
    $(this).children('.wxinz-2').addClass('active');
    $('.box-2').hide();
    $("." + $(this).attr('data-tab')).show();
});