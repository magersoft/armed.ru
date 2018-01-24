$(".primary-menu__widget-inner").mCustomScrollbar({
    theme:"dark",
    scrollbarPosition: "outside"
});

// Выпадающее окно при наведении на иконку Personal
/*
$("#dropdownPersonal")
    .click(function() {
        $(".personal__auth").show(200);
    });
$("#personal")
    .mouseleave(function() {
        $(".personal__auth").hide(400);
    });
*/

// Выпадающее окно при наведении на иконку Compare
$("#dropdownCompare")
    .click(function() {
        $(".primary-menu__compare").show(200);
    });
$("#compare")
    .mouseleave(function() {
        $(".primary-menu__compare").hide(400);
    });

// Выпадающее окно при наведении на иконку Favorite
$("#dropdownFavorite")
    .click(function() {
        $(".primary-menu__favorite").show(200);
    });
$("#favorite")
    .mouseleave(function() {
        $(".primary-menu__favorite").hide(400);
    });

// Выпадающее окно при наведении на иконку Cart
$("#dropdownCart")
    .click(function() {
        $(".primary-menu__cart").show(200);
    });
$("#cart")
    .mouseleave(function() {
        $(".primary-menu__cart").hide(400);
    });

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


$('.primary-menu__widget-item').mouseover(function () {
        $(this).children('.primary-menu__widget-delete').show();
    });
$('.primary-menu__widget-item').mouseleave(function () {
        $('.primary-menu__widget-delete').hide();
});