$(".catalog__content-main").on('DOMSubtreeModified', function() {
    $('.product').hover(
        function () {
            if ($(this).hasClass('product_entity')) {
                $(this).removeClass('product_entity_nothover').addClass('product_entity_hover');
            }
            else if ($(this).hasClass('product_entitySmal')) {
                $(this).removeClass('product_entitySmal_nothover').addClass('product_entitySmal_hover');
            }
            else {
                $(this).removeClass('product_nothover').addClass('product_hover');
                $(this).children('.product__asside').removeClass('product__asside_hide').addClass('product__asside_active');
                $(this).children('.product__buttonWrapp').removeClass('product__buttonWrapp_hide').addClass('product__buttonWrapp_active');
            }
        },
        function () {
            if ($(this).hasClass('product_entity')) {
                $(this).removeClass('product_entity_hover').addClass('product_entity_nothover');
            }
            else if ($(this).hasClass('product_entitySmal')) {
                $(this).removeClass('product_entitySmal_hover').addClass('product_entitySmal_nothover');
            }
            else {
                $(this).removeClass('product_hover').addClass('product_nothover');
                $(this).children('.product__asside').removeClass('product__asside_active').addClass('product__asside_hide');
                $(this).children('.product__buttonWrapp').removeClass('product__buttonWrapp_active').addClass('product__buttonWrapp_hide');
            }

        }
    );
});
$('.product').hover(
    function () {
        if ($(this).hasClass('product_entity')) {
            $(this).removeClass('product_entity_nothover').addClass('product_entity_hover');
        }
        else if ($(this).hasClass('product_entitySmal')) {
            $(this).removeClass('product_entitySmal_nothover').addClass('product_entitySmal_hover');
        }
        else {
            $(this).removeClass('product_nothover').addClass('product_hover');
            $(this).children('.product__asside').removeClass('product__asside_hide').addClass('product__asside_active');
            $(this).children('.product__buttonWrapp').removeClass('product__buttonWrapp_hide').addClass('product__buttonWrapp_active');
        }
    },
    function () {
        if ($(this).hasClass('product_entity')) {
            $(this).removeClass('product_entity_hover').addClass('product_entity_nothover');
        }
        else if ($(this).hasClass('product_entitySmal')) {
            $(this).removeClass('product_entitySmal_hover').addClass('product_entitySmal_nothover');
        }
        else {
            $(this).removeClass('product_hover').addClass('product_nothover');
            $(this).children('.product__asside').removeClass('product__asside_active').addClass('product__asside_hide');
            $(this).children('.product__buttonWrapp').removeClass('product__buttonWrapp_active').addClass('product__buttonWrapp_hide');
        }

    }
);
$('.product__question').click(function(){
    var mod = $('.product__main').find('.product__question').next();
    console.log(mod);
    for (var i = 0; i < mod.length; i++) {
        var win = $(mod[i]);
        win.slideUp(400);
    }
    $(this).next().slideDown(400);
    return false
});

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
            $('.product_entity').removeClass('product_entity').addClass('product_entitySmal');
            for (var i = 0; i < card.length; i++) {
                var product = card[i];
                product.classList.remove('product__main_entity');
                product.classList.add('product__main_entitySmal');
                var childrens = product.children;
                for (var j = 0; j < childrens.length; j++){
                    childrens[j].classList += 'Smal';
                }
            }
            return false;
        }
    );
});

$(function () {
    $('#productChangeFull').click(function () {
        var card = $('.product_entitySmal').children();
        $('.product_entitySmal').removeClass('product_entitySmal').addClass('product_entity');
        for (var i = 0; i < card.length; i++) {
            var product = card[i];
            product.classList.remove('product__main_entitySmal');
            product.classList.add('product__main_entity');
            var childrens = product.children;
            for (var j = 0; j < childrens.length; j++) {
                childrens[j].classList.value = childrens[j].classList.value.replace(/Smal/gi, '');
            }
        }
        return false;

    });
});