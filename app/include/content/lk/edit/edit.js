$( function() {
    $( ".edit__tabs" ).tabs({
        active: 0,
        classes: {
            "ui-tabs-active": "tabs__active"
        }
    });
} );
//TODO Создание темы для custom scrollbar
$(".edit__users-body").mCustomScrollbar({
    theme:"dark"
});
