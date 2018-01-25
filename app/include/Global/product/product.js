$('.product').hover(
    function() {
        /*console.log('hover')*/
        $(this).removeClass('product_nothover').addClass('product_hover');
        $(this).children('.product__asside').removeClass('product__asside_hide').addClass('product__asside_active');
        $(this).children('.product__buttonWrapp').removeClass('product__buttonWrapp_hide').addClass('product__buttonWrapp_active');
    },
    function(){
        /*console.log('not-hover')*/
        $(this).removeClass('product_hover').addClass('product_nothover');
        $(this).children('.product__asside').removeClass('product__asside_active').addClass('product__asside_hide');
        $(this).children('.product__buttonWrapp').removeClass('product__buttonWrapp_active').addClass('product__buttonWrapp_hide');
    }
);

$('.product__question').click(function(){

    $(this).next().slideDown(400);
    $('.product__question_close').click(function(){
        $(this).parent().slideUp(400);
    });
    return false
});