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

function Position(br, obj) {
    var div = $(obj).next();
    $(div).css('display', 'block');
    var menu = (div[0].children[0]);
    var top = Math.round(br.top);
    var left = Math.round(br.left);
    var link = div.children().children();
    if (top > 750) {
        for (var i = 1; i < link.length; i++) {
            $(link[i]).addClass('orders__menu-link_up');
        }
    }


    $(div[0].children[0]).css({top: top, left: left})
}

$('.orders__menu-close').click(function () {
    var links = $(this).parent().children();
    for (var i = 1; i < links.length; i++) {
        $(links[i]).removeClass('orders__menu-link_up');
    }
    $(this).parent().parent().css('display', 'none');
});

/*
$('.ClickSave').on('click', function () {
    var icon = $(this);
    console.log(icon);
    var position = icon.width();
    console.log(position);

    return false;
});*/
