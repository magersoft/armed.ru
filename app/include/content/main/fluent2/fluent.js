var change = $('.fluent__info-business');
var background = $('.background-business');
$('.fluent__item-card').click(function () {
    var id = $(this).attr('id');


    if (id == "fluentBusiness"){
        $(change).removeClass('bg-on').addClass('bg-off');
        $(background).stop().animate({'opacity': '0'},2000);

        change = $('.fluent__info-business');
        function visibleblock() {
            $(change).removeClass('bg-off').addClass('bg-on');
        }
        setTimeout(visibleblock, 840);
        background = $('.background-business');
        $(background).stop().animate({'opacity': '1'},2000);
        $('.fluent__item-card').removeClass('fluent__active');


        $('.fluent__button').removeClass('fluent__button-home').removeClass('fluent__button-care').removeClass('fluent__button-pro').addClass('fluent__button-business').attr('href','promo_bus.html');
    }
    if (id == "fluentHome"){
        $(change).removeClass('bg-on').addClass('bg-off');
        $(background).stop().animate({'opacity': '0'},2000);
        change = $('.fluent__info-home');

        function visibleblock() {
            $(change).removeClass('bg-off').addClass('bg-on');
        }
        setTimeout(visibleblock, 840);
        background = $('.background-home');
        $(background).stop().animate({'opacity': '1'},2000);

        $('.fluent__button').removeClass('fluent__button-business').removeClass('fluent__button-care').removeClass('fluent__button-pro').addClass('fluent__button-home').attr('href','error.html');
    }
    if (id == "fluentCare"){
        $(change).removeClass('bg-on').addClass('bg-off');
        $(change).removeClass('bg-on').addClass('bg-off');

        $(background).stop().animate({'opacity': '0'},2000);

        change = $('.fluent__info-care');
        function visibleblock() {
            $(change).removeClass('bg-off').addClass('bg-on');
        }
        setTimeout(visibleblock, 840);
        $(change).removeClass('bg-on').addClass('bg-off');


        background = $('.background-care');
        $(background).stop().animate({'opacity': '1'},2000);


        $('.fluent__button').removeClass('fluent__button-home').removeClass('fluent__button-business').removeClass('fluent__button-pro').addClass('fluent__button-care').attr('href','error.html');
    }
    if (id == "fluentPro") {
        $(change).removeClass('bg-on').addClass('bg-off');
        $(background).stop().animate({'opacity': '0'}, 2000);
        change = $('.fluent__info-pro');

        function visibleblock() {
            $(change).removeClass('bg-off').addClass('bg-on');
        }

        setTimeout(visibleblock, 840);
        background = $('.background-pro');
        $(background).stop().animate({'opacity': '1'}, 2000);
        $('.fluent__button').removeClass('fluent__button-home').removeClass('fluent__button-care').removeClass('fluent__button-business').addClass('fluent__button-pro').attr('href','error.html');
    }
    $('.fluent__item-card').removeClass('fluent__active');
    $(this).toggleClass('fluent__active');
});