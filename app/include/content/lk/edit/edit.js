$( function() {
    $( ".edit__tabs" ).tabs({
        active: 0,
        classes: {
            "ui-tabs-active": "tabs__active"
        }
    });
} );
$(".edit__users-body").mCustomScrollbar({
    theme:"edit",
    scrollbarPosition: "outside"
});

$('#UploadFileButton').change(function () {
    $('.UploadFile-Path').val(this.value.replace('C:\\fakepath\\', ''));
});