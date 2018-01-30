$( function() {
    $( ".orders__tabs" ).tabs({
        active: 0,
        classes: {
            "ui-tabs-active": "tabs__active"
        }
    });
} );


//TODO Создание темы для custom scrollbar
$(".orders__body").mCustomScrollbar({
    theme:"dark"
});
