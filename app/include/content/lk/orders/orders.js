$( function() {
    $( ".orders__tabs" ).tabs({
        active: 0,
        classes: {
            "ui-tabs-active": "tabs__active"
        }
    });
} );

$(".orders__body").mCustomScrollbar({
    theme:"order",
    scrollbarPosition: "outside"
});

$("#filterOpen").click(function () {
    if($('#filterPopup').css('display') == 'none') {
        $('#filterPopup').removeClass('orders__filter-popup_hide').addClass('orders__filter-popup_active');
    } else {
        $('#filterPopup').removeClass('orders__filter-popup_active').addClass('orders__filter-popup_hide');
    }


    return false
});
