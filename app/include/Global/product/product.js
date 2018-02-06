$('.product').hover(
    function() {
        if ($(this).hasClass('product_entity')) {
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

//TODO: Доработать закрытие всплывашки , поменять позиционирование открытия всплывашки
$(document).click(function(e){
    var obj = $('.product__question-window');
    if (!obj.is(e.target) // если клик был не по нашему блоку
        && obj.has(e.target).length === 0) { // и не по его дочерним элементам
        obj.slideUp(400); // скрываем его
    }
});

// Скрипт для изменения карточки товара
//TODO Оптимизировать скрипт для быстроты загрузки
$(function () {
    $('#productChange').click(
        function () {
            var card = $('.product_entity').children();
            $('.product_entity').removeClass('product_entity').addClass('product_entitySm');
            for (var i = 0; i < card.length; i++) {
                var product = card[i];
                product.classList.remove('product__main_entity');
                product.classList.add('product__main_entitySm');
                var childrens = product.children;
                for (var j = 0; j < childrens.length; j++){
                    var child = childrens[j];
                    child.classList += 'Sm';


                }
            }
            return false;
        }
    );
});

$(function () {
    $('#productChangeFull').click(function () {
        var card = $('.product_entitySm').children();
        $('.product_entitySm').removeClass('product_entitySm').addClass('product_entity');
        for (var i = 0; i < card.length; i++) {
            var product = card[i];
            product.classList.remove('product__main_entitySm');
            product.classList.add('product__main_entity');
            var childrens = product.children;
            for (var j = 0; j < childrens.length; j++) {
                var child = childrens[j];
                var classes = child.classList.value;
                var reg = /sm/gi;
                var newClassList = classes.replace(reg, '');
                child.classList.value = newClassList;
            }
        }
        return false;

    });
});