$( ".FilterTabs" ).tabs({
    active: false,
    collapsible: true,
    hide: { effect: "blind", duration: 400 },
    show: { effect: "blind", duration: 400 }
});
$('.FilterTabs-Label').change(function () {
        var color = $(this).find("span").css('color');

        if (color == 'rgb(130, 130, 130)') {
            $(this).find("span").css('color', 'blue');
        } else if (color == 'rgb(0, 0, 255)') {
            $(this).find("span").css('color', 'rgb(130, 130, 130)');
        }


    });

