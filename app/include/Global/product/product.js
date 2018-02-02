$('.product').hover(
    function() {
        if ($(this).hasClass('product_entity')) {
            console.log("тыц");
            $(this).removeClass('product_entity_nothover').addClass('product_entity_hover');
        }
        else if ($(this).hasClass('product_entitySm')) {
            $(this).removeClass('product_entitySm_nothover').addClass('product_entitySm_hover');
        }
        else
            {
            $(this).removeClass('product_nothover').addClass('product_hover');
            $(this).children('.product__asside').removeClass('product__asside_hide').addClass('product__asside_active');
            $(this).children('.product__buttonWrapp').removeClass('product__buttonWrapp_hide').addClass('product__buttonWrapp_active');
        }
    },
    function(){
        if ($(this).hasClass('product_entity')){
            $(this).removeClass('product_entity_hover').addClass('product_entity_nothover');
        }
        else if ($(this).hasClass('product_entitySm')) {
            $(this).removeClass('product_entitySm_hover').addClass('product_entitySm_nothover');
        }
        else
            {
            $(this).removeClass('product_hover').addClass('product_nothover');
            $(this).children('.product__asside').removeClass('product__asside_active').addClass('product__asside_hide');
            $(this).children('.product__buttonWrapp').removeClass('product__buttonWrapp_active').addClass('product__buttonWrapp_hide');
        }

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

// Скрипт для изменения карточки товара

$(function () {
    $('#productChange').click(
        function () {
            var card = $('.product_entity').children();
            console.log(card);
            return false;
        },
        function () {
            var card = $('.product_entity').children();
            console.log(card);
            return false;
        }
    );

});