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

$(function () {
   $('.asside_right').mouseleave(function () {
       $('#filterPopup').removeClass('orders__filter-popup_active').addClass('orders__filter-popup_hide')
   });
});

$("#filterOpen").click(function () {
    if($('#filterPopup').css('display') == 'none') {
        $('#filterPopup').removeClass('orders__filter-popup_hide').addClass('orders__filter-popup_active');
    } else {
        $('#filterPopup').removeClass('orders__filter-popup_active').addClass('orders__filter-popup_hide');
    }
    return false
});


function Position(br) {
    console.log(typeof(br.left));
    var top = Math.round(br.top);
    var left = Math.round(br.left);

}
/*
$('.ClickSave').on('click', function () {
    var icon = $(this);
    console.log(icon);
    var position = icon.width();
    console.log(position);

    return false;
});*/
