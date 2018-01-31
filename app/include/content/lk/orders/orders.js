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

$("#filterOpen").click(function () {
    if($('#filterPopup').css('display') == 'none') {
        $('#filterPopup').removeClass('orders__filter-popup_hide').addClass('orders__filter-popup_active');
    } else {
        $('#filterPopup').removeClass('orders__filter-popup_active').addClass('orders__filter-popup_hide');
    }


    return false
});
