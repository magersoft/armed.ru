$('.set__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: '<i class="slide-right slide-right-video"></i>',
    prevArrow: '<i class="slide-left slide-left-video"></i>'
});
$('.set__slider-check').click(function () {
    $(this).toggleClass('set__slider-check-ok');
    $('.set__slider-content').toggleClass('set-image_check')
});