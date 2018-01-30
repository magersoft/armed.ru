
//TODO стиль для скроллбара
$(".quickview-wrapper_description").mCustomScrollbar({
    theme:"dark"
});


$(".quickview__select").click(function () {
    $(this).addClass('select__active');
});
$(".quickview__select").mouseout(function () {
    $(this).removeClass('select__active');
});