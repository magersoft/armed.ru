// var business = $('.fluent__item-business');
// var home = $('.fluent__item-home');
// var care = $('.fluent__item-care');
// var pro = $('.fluent__item-pro');
$('.fluent__item-card').click(function () {
    var fon = $(this).css('background');
    $('.fluent__item-card').removeClass('fluent__active');
    $(this).toggleClass('fluent__active');
    $('.fluent__inner-background').css('background', fon);
    $('.fluent__inner-background').animate({'opacity': '0.7'}, 400);
    $('.fluent__inner-background').animate({'opacity': '1'}, 400);
    //$(this)
    //console.log(fon);
});