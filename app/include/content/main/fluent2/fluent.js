var change = $('.fluent__info-business');
$('.fluent__item-card').click(function () {
    var id = $(this).attr('id');
    var fon = ('.fluent__inner-background');
    if (id == "fluentBusiness"){
        $(change).animate({"right": "+=700px"}, "slow");
        function animationStart() {
            $(fon).stop().animate({'opacity': '0'},500);
        }
        setTimeout(animationStart,10);
        function removeClass() {
            $(fon).stop().css('background-image','url(images/main/fluent/bis-big-bg.png)');
        }
        setTimeout(removeClass, 600);
        function animationStop() {
            $(fon).stop().animate({'opacity':'1'},300);
        }
        change = $('.fluent__info-business');
        $(change).animate({"right": "-=700px"}, "slow");
        setTimeout(animationStop, 700);
        // $('.fluent__info').removeClass('fluent__info-hide');
        // $('.fluent__info-business').addClass('fluent__info-hide');
    }
    if (id == "fluentHome"){
        $(change).animate({"right": "+=700px"}, "slow");
        function animationStart() {
            $(fon).stop().animate({'opacity': '0'},500);
        }
        function removeClass() {
            $(fon).stop().css('background-image','url(images/main/fluent/home-big-bg.png)');
        }
        function animationStop() {
            $(fon).stop().animate({'opacity':'1'},300);
        }
        change = $('.fluent__info-home');
        $(change).animate({"right": "-=700px"}, "slow");
        setTimeout(animationStart,10);
        setTimeout(removeClass, 600);
        setTimeout(animationStop, 700);
        // $('.fluent__info').removeClass('fluent__info-hide');
        // $('.fluent__info-home').addClass('fluent__info-hide');
    }
    if (id == "fluentCare"){
        $(change).css('margin-left', '-700px');
        function animationStart() {
            $(fon).stop().animate({'opacity': '0'},500);
        }
        function removeClass() {
            $(fon).css('background-image','url(\'images/main/fluent/care-big-bg.png\'');
        }
        function animationStop() {
            $(fon).stop().animate({'opacity':'1'},300);
        }
        change = $('.fluent__info-care');
        $(change).css('margin-left', '0');
        setTimeout(animationStart,10);
        setTimeout(removeClass, 600);
        setTimeout(animationStop, 700);
        // $('.fluent__info').removeClass('fluent__info-hide');
        // $('.fluent__info-care').addClass('fluent__info-hide');
    }
    if (id == "fluentPro"){
        $(change).css('margin-left', '-700px');
        function animationStart() {
            $(fon).stop().animate({'opacity': '0'},500);
        }
        function removeClass() {
            $(fon).css('background-image','url(\'images/main/fluent/pro-big-bg.png\'');
        }
        function animationStop() {
            $(fon).stop().animate({'opacity':'1'},300);
        }
        change = $('.fluent__info-pro');
        $(change).css('margin-left', '0');
        setTimeout(animationStart,10);
        setTimeout(removeClass, 600);
        setTimeout(animationStop, 700);
        // $('.fluent__info').removeClass('fluent__info-hide');
        // $('.fluent__info-pro').addClass('fluent__info-hide');
     }
    $('.fluent__item-card').removeClass('fluent__active');
    $(this).toggleClass('fluent__active');
    // $('.fluent__inner-background').css('background', fon);
    // $('.fluent__inner-background').animate({'opacity': '0.7'}, 400);
    // $('.fluent__inner-background').animate({'opacity': '1'}, 400);
    //$(this)
    //console.log(fon);
});