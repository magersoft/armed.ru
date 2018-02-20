$('.set__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: '<i class="slide-right slide-right-set"></i>',
    prevArrow: '<i class="slide-left slide-left-set"></i>'
});
$('.set__slider-item__check').click(function () {
    $(this).toggleClass('set__slider-item__check-ok');
    var test = $(this).next().children();
    $(test).toggleClass('set__check')
});
$('.set__slider-item__img').click(function () {
    var img  = $(this).parent();
    $(img).toggleClass('set__check')
    var exmp = img.parent().prev();
    $(exmp).toggleClass('set__slider-item__check-ok')
});