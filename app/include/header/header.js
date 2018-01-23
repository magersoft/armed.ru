$(".primary-menu__cart_inner").mCustomScrollbar({
    theme:"dark",
    scrollbarPosition: "outside"
});

// Выпадающее окно при наведении на иконку Personal
$("#dropdownPersonal")
    .mouseover(function() {
        $(".personal__auth").show(200);
    });
$("#personal")
    .mouseleave(function() {
        $(".personal__auth").hide(400);
    });

// Выпадающее окно при наведении на иконку Cart
/*
$("#dropdownCart")
    .mouseover(function() {
        $(".primary-menu__cart").show(200);
    });
$("#cart")
    .mouseleave(function() {
        $(".primary-menu__cart").hide(400);
    });
*/

// Frontend - value in dropdown cart
$(document).ready(function() {
    $('.primary-menu__cart_product_minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        if (count > 0 || (count - 1) == -1) {
            var total = parseInt($('#value-dishes').html() - 1);
            var total_cost = parseInt($('#value-totalcost').html());
            var $cost_element = $(this).parent().parent().find('.primary-menu__cart_product-price_cost');
            var cost = parseInt($cost_element.html());
            total_cost = total_cost - cost;
            total = total < 0 ? 0 : total;
            $('#value-totalcost').html(total_cost);
            $('#value-dishes').html(total);
        }
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.primary-menu__cart_product_plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        var total = parseInt($('#value-dishes').html());
        total++;
        var total_cost = parseInt($('#value-totalcost').html());
        var $cost_element = $(this).parent().parent().find('.primary-menu__cart_product-price_cost');
        var cost = parseInt($cost_element.html());
        total_cost = total_cost + cost;
        $('#value-totalcost').html(total_cost);
        $('#value-dishes').html(total);
        $input.change();
        return false;
    });
});