$( ".FilterTabs" ).tabs({
    active: false,
    collapsible: true,
    hide: { effect: "blind", duration: 400 },
    show: { effect: "blind", duration: 400 }
});
$('.FilterTabs-Label').change(function () {
        var check = $('.FilterTabs-Label');
        $(this).find("span").css('color', 'blue');
    });

