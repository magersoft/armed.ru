var change = $('.fluent__info-business');
var background = $('.background-business');
$('.fluent__item-card').click(function () {
    var id = $(this).attr('id');
    var fon = ('.fluent__inner-background');
    if (id == "fluentBusiness"){
        $(change).removeClass('bg-on').addClass('bg-off');
        $(background).animate({'opacity': '0'},500);

        change = $('.fluent__info-business');
        function visibleblock() {
            $(change).removeClass('bg-off').addClass('bg-on');
        }
        setTimeout(visibleblock, 840);
        background = $('.background-business');
        $(background).animate({'opacity': '1'},500);
        $('.fluent__item-card').removeClass('fluent__active');
        $(this).toggleClass('fluent__active');
    }
    if (id == "fluentHome"){
        $(change).removeClass('bg-on').addClass('bg-off');
        $(background).animate({'opacity': '0'},500);
        change = $('.fluent__info-home');

        function visibleblock() {
            $(change).removeClass('bg-off').addClass('bg-on');
        }
        setTimeout(visibleblock, 840);
        background = $('.background-home');
        $(background).animate({'opacity': '1'},500);
        $('.fluent__item-card').removeClass('fluent__active');
        $(this).toggleClass('fluent__active');
    }
    if (id == "fluentCare"){
        $(change).removeClass('bg-on').addClass('bg-off');
        $(change).removeClass('bg-on').addClass('bg-off');
        $(background).animate({'opacity': '0'},500);
        change = $('.fluent__info-care');
        function visibleblock() {
            $(change).removeClass('bg-off').addClass('bg-on');
        }
        setTimeout(visibleblock, 840);
        $(change).removeClass('bg-on').addClass('bg-off');
        background = $('.background-care');
        $(background).animate({'opacity': '1'},500);
        $('.fluent__item-card').removeClass('fluent__active');
        $(this).toggleClass('fluent__active');
    }
    if (id == "fluentPro"){
        $(change).removeClass('bg-on').addClass('bg-off');
        $(background).animate({'opacity': '0'},500);
        function visibleblock() {
            $(change).removeClass('bg-off').addClass('bg-on');
        }
        setTimeout(visibleblock, 840);
        background = $('.background-pro');
        $(background).animate({'opacity': '1'},500);
     }
    $('.fluent__item-card').removeClass('fluent__active');
    $(this).toggleClass('fluent__active');
});