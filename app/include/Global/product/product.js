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

    return false
});

//TODO: Доработать закрытие всплывашки
$(document).click(function(e){
    var obj = $('.product__question-window');
    if (!obj.is(e.target) // если клик был не по нашему блоку
        && obj.has(e.target).length === 0) { // и не по его дочерним элементам
        obj.slideUp(400); // скрываем его
    }
});