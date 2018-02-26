$( function() {
    $( ".infos__tabs" ).tabs({
        active: 0,
        classes: {
            "ui-tabs-active": "tabs__active"
        }
    });
} );
$( function() {
    $( ".infos__tabs-mini" ).tabs({
        active: 0,
        classes: {
            "ui-tabs-active": "tabs__active-mini"
        }
    });
} );