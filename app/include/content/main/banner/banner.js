$('.banner__wrapper').click(function(){
	$('.banner__wrapper').removeClass('banner-display');
	$(this).toggleClass('banner-display');
    $('.banner__item').removeClass('banner__item-display');
	$(this).children().children().children().children('.banner__item').toggleClass('banner__item-display');
    $('.banner__overlay').removeClass('banner__overlay-none');
    $(this).children('.banner__overlay').toggleClass('banner__overlay-none');
    // $('.banner-title').removeClass('banner-title-display');
    // $(this).children().children().children('.banner-title').toggleClass('banner-title-display');
});