/* ==================== START FIXED HEADER ================= */
$(function(){
    var fixHeader = 80;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= fixHeader ) {
            $('.topbar').slideUp(200, 'linear');
            $('.primary-menu__fix-logo').show();
            $('.burger-button').hide();
            $('.primary-menu__catalog-link').css('margin-left', '15px');
            $('.primary-menu').css('box-shadow', '0 10px 25px rgba(0, 0, 0, 0.05)');
            $('.primary-menu__catalog-icon').css('right', '-5px');
            $('.asside_left').removeClass('asside_down').addClass('asside_up');
            $('.asside_right').removeClass('asside_down').addClass('asside_up');
        }
        else {
            $('.topbar').slideDown(200, 'linear');
            $('.primary-menu__fix-logo').hide();
            $('.burger-button').show();
            $('.primary-menu__catalog-link').css('margin-left', '0px');
            $('.primary-menu').css('box-shadow', 'none');
            $('.primary-menu__catalog-icon').css('right', '10px');
            $('.asside_left').removeClass('asside_up').addClass('asside_down');
            $('.asside_right').removeClass('asside_up').addClass('asside_down');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});
/* ===================== END FIXED HEADER =================== */

/* ===================== START DROPDOWN ===================== */
$('.js-dropdown-toggler').click(function(e){
    var current = $(this).next('.js-dropdown');
    current.toggleClass('is-open');
    $('.js-dropdown').not(current).removeClass('is-open');
    e.stopPropagation();
});

$('html').click(function(){
    if ($('.js-dropdown').hasClass('is-open')) {
        $('.js-dropdown').removeClass('is-open');
    }
});

$('.js-dropdown').click(function(e){
    e.stopPropagation();
});

// Scrollbar in dropdown item
$(".primary-menu__widget-inner").mCustomScrollbar({
    theme:"dark",
    scrollbarPosition: "outside"
});

// Появление крестика "удалить" из выпадашки при наведении на элемент
$('.primary-menu__widget-item').mouseover(function () {
    $(this).children('.primary-menu__widget-delete').show();
});
$('.primary-menu__widget-item').mouseleave(function () {
    $('.primary-menu__widget-delete').hide();
});
/* ===================== END DROPDOWN ===================== */


// Frontend - value in dropdown cart
$(document).ready(function() {
    $('.primary-menu__cart_product_minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        if (count > 0 || (count - 1) == -1) {
            var total = parseInt($('#cart-volume').html() - 1);
            var total_cost = parseInt($('#cart-price').html());
            var $cost_element = $(this).parent().parent().find('.primary-menu__cart_product-price_cost');
            var cost = parseInt($cost_element.html());
            total_cost = total_cost - cost;
            total = total < 0 ? 0 : total;
            $('#cart-price').html(total_cost);
            $('#cart-volume').html(total);
        }
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.primary-menu__cart_product_plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        var total = parseInt($('#cart-volume').html());
        total++;
        var total_cost = parseInt($('#cart-price').html());
        var $cost_element = $(this).parent().parent().find('.primary-menu__cart_product-price_cost');
        var cost = parseInt($cost_element.html());
        total_cost = total_cost + cost;
        $('#cart-price').html(total_cost);
        $('#cart-volume').html(total);
        $input.change();
        return false;
    });
});

// Определение страницы и установка необходимого хедара
$(function(){
    var path = window.location.pathname.slice(1);
    if (path.indexOf('lk_') + 1) {
        $('.primary-menu').css('display', 'none');
    } else {
        $('.infolk').css('display', 'none');
    }
});
$(document).ready(function(){
    simple_tooltip(".primary-menu__icon-item", 'tooltip');
});

/* TODO при "value=0" менять background-position иконки минус
$('.primary-menu__cart_product_minus').click(function() {
    var test = [];

    $('.primary-menu__cart_product_volume').find(':input').each(function(i, input) {
        test.push($(input).val());
    });

    alert(test);

});
*/