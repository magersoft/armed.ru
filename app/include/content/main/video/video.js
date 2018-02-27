$('.clips__top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.clips__bottom'
});
$('.clips__bottom').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.clips__top',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});