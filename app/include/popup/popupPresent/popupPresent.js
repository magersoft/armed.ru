$(".modal__present-list").mCustomScrollbar({
    theme:"dark"
});

$('.pickUnit_container__button').click(function () {
    $(this).css('display', 'none');
    $(this).next().css('display', 'flex');
    return false
});