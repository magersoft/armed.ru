$('.clips__top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.clips__bottom'
});
$('.clips__bottom').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.clips__top',
  dots: false,
  focusOnSelect: true,
  nextArrow: '<i class="Slider-ArrowLeft Slider-ArrowLeft_MainVideo"></i>',
  prevArrow: '<i class="Slider-ArrowRight Slider-ArrowRight_MainVideo"></i>'
});