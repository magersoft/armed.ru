// Scrollbar in cart
$(".cart__table-inner").mCustomScrollbar({
    theme:"cart",
    scrollbarPosition: "inside"
});

$('.promokod').click(function () {
    $('.promokod').html("<i class='cart__table-footer_done-icon'></i> Промо-код получен");
    $('.promokod').css('color', 'rgba(125, 196, 114, 1');
    $('.bonus').css('display', 'flex');
});

// TODO ВРЕМЕННЫЙ БЛОК ДЛЯ ДЕМОНСТРАЦИИ КОРЗИНЫ ФИЗИКОВ И ЮРИКОВ
$('.click-f').click(function () {
    $('.urik').css('display', 'none');
});

$('.click-u').click(function () {
    $('.urik').css('display', 'flex');
});