/* ==================== START FIXED HEADER ================= */
$(function(){
    var fixHeader = 50;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= fixHeader ) {
            $('.topbar').slideUp(400);
            $('.primary-menu__fix-logo').show();
            $('.burger-button').hide();
            $('.primary-menu__catalog-link').css('margin-left', '15px');
            $('.primary-menu').css('box-shadow', '0 10px 25px rgba(0, 0, 0, 0.05)');
            $('.primary-menu__catalog-icon').css('right', '-5px')
        }
        else {
            $('.topbar').slideDown(400);
            $('.primary-menu__fix-logo').hide();
            $('.burger-button').show();
            $('.primary-menu__catalog-link').css('margin-left', '0px');
            $('.primary-menu').css('box-shadow', 'none');
            $('.primary-menu__catalog-icon').css('right', '10px')
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});
/* ===================== END FIXED HEADER =================== */

/* ===================== START DROPDOWN ===================== */
// Выпадающее меню КАТАЛОГ в Header
$("#dropdownCatalog")
    .click(function() {
        $(".dropdown-catalog").show();
    });
$("#primary-menu__catalog")
    .mouseleave(function() {
        $(".dropdown-catalog").slideUp(400);
    });

// Выпадающее окно при наведении на иконку Compare
$("#dropdownCompare")
    .click(function() {
        $(".primary-menu__compare").show();
    });
$("#compare")
    .mouseleave(function() {
        $(".primary-menu__compare").slideUp(400);
    });

// Выпадающее окно при наведении на иконку Favorite
$("#dropdownFavorite")
    .click(function() {
        $(".primary-menu__favorite").show();
    });
$("#favorite")
    .mouseleave(function() {
        $(".primary-menu__favorite").slideUp(400);
    });

// Выпадающее окно при наведении на иконку Cart
$("#dropdownCart")
    .click(function() {
        $(".primary-menu__cart").show();
    });
$("#cart")
    .mouseleave(function() {
        $(".primary-menu__cart").slideUp(200);
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


/* TODO при "value=0" менять background-position иконки минус
$('.primary-menu__cart_product_minus').click(function() {
    var test = [];

    $('.primary-menu__cart_product_volume').find(':input').each(function(i, input) {
        test.push($(input).val());
    });

    alert(test);

});
*/