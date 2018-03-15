$('.main-catalog__close--left').click(function(){
    $('.main-catalog--left').toggleClass('main-catalog--active');
    $('.main-catalog__wrapper--left').toggleClass('main-catalog__wrapper--active');
});
$('.primary-menu__catalog-link--main').click(function(){
    $('.main-catalog--left').toggleClass('main-catalog--active');
    $('.main-catalog__wrapper--left').toggleClass('main-catalog__wrapper--active');
});
$('.primary-menu__catalog-link--menu').click(function(){
    $('.main-catalog--right').toggleClass('main-catalog--active');
    $('.main-catalog__wrapper--right').toggleClass('main-catalog__wrapper--active');
});
$('.main-catalog__close--right').click(function(){
    $('.main-catalog--right').toggleClass('main-catalog--active');
    $('.main-catalog__wrapper--right').toggleClass('main-catalog__wrapper--active');
});

$('.main-catalog-top').click(function () {
    var down = $(this).children('.main-catalog-bottom');
    $('.main-catalog-bottom').not(down).slideUp(200);
    down.slideToggle(200);
    e.preventDefault();
    // $('.main-catalog-bottom').slideUp(200);
    console.log(down);
});