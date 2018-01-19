$(".modal__present-list").mCustomScrollbar({
    theme:"dark"
});

$('.card_present__button').click(function () {
    $(this).css('display', 'none');
    $(this).next().css('display', 'flex');
    return false
});