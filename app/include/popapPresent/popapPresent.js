$(".modal__present-list").mCustomScrollbar({
    theme:"minimal-dark"
});

$('.card_present__button').click(function () {
    $('.card_present__button').css('display', 'none');
    $('.card_present__selected').css('display', 'flex');
    return false
});