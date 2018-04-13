$( ".FilterTabs" ).tabs({
    active: false,
    collapsible: true,
    hide: { effect: "blind", duration: 400 },
    show: { effect: "blind", duration: 400 }
});
$('.FilterTabs-Label').change(function () {
        var color = $(this).find("span").css('color');
        var chec = $(this).children('input').prop('checked');
        if (chec) {
            console.log('Выбран');
        } else {
            console.log('Отменен');
        }
        if (color == 'rgb(189, 189, 189)') {
            $(this).find("span").css('color', 'rgb(130, 130, 130)');
        } else if (color == 'rgb(130, 130, 130)') {
            $(this).find("span").css('color', 'rgb(189, 189, 189)');
        }
    });

