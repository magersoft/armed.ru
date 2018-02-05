$( "#assideRange" ).slider({
    range: true,
    min: 0,
    max: 9000000,
    values: [ 500, 9000000 ],
    classes: {
        "ui-slider" : "catalog__asside-range",
        "ui-slider-horizontal" : "catalog__asside-range_lineHorizont",
        "ui-slider-range" : "catalog__asside-range_line",
        "ui-slider-handle" : "catalog__asside-range_handle",
        "ui-widget-content" : "catalog__asside-range_content"

    },
    slide: function( event, ui ) {
        $('#amountMin').val(ui.values[ 0 ]);
        $('#amountMax').val(ui.values[ 1 ]);
    }
});
$('#amountMin').val($( "#assideRange" ).slider( "values", 0 ));
$('#amountMax').val($( "#assideRange" ).slider( "values", 1 ));
