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