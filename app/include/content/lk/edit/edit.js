$( function() {
    $( ".edit__tabs" ).tabs({
        active: 1,
        classes: {
            "ui-tabs-active": "edit__tabs-link_active"
        }
    });
} );
//TODO Создание темы для custom scrollbar
$(".edit__users-body").mCustomScrollbar({
    theme:"dark"
});
