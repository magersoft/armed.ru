$(".Client-Organization").mCustomScrollbar({
    theme: "client",
    scrollbarPosition: "outside"
});
$(".Mail-List").mCustomScrollbar({
    theme: "client",
    scrollbarPosition: "outside"
});
$(".Notification-List").mCustomScrollbar({
    theme: "client",
    scrollbarPosition: "outside"
});

$('#ClientClik').click(function () {
        $('.Client').slideDown(400);
        return false;
});
//TODO Доработать скрипт закрытия всплывашки
$('.Client').mouseleave(function () {
    $('.Client').slideUp(400);
});
$('#MailClick').click(function () {
        $('.Mail').slideDown(400);
        return false;
});
//TODO Доработать скрипт закрытия всплывашки
$('.Mail').mouseleave(function () {
    $('.Mail').slideUp(400);
});
$('#NotificatinClient').click(function () {
        $('.Notification').slideDown(400);
        return false;
});
//TODO Доработать скрипт закрытия всплывашки
$('.Notification').mouseleave(function () {
    $('.Notification').slideUp(400);
});
