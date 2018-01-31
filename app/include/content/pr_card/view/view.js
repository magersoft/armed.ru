$('.view-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.view-slider-bottom'
});
$('.view-slider-bottom').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.view-slider-main',
    dots: false,
    focusOnSelect: true
});