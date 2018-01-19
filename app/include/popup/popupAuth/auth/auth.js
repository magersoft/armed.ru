$( function() {
    $( ".auth__wrapp" ).tabs({
        active: 2,
        classes: {
            "ui-tabs-active": "auth__active-link"
        }
    });
} );


$('#button__phone').on('click', function(){
    var content = $('.modal__change').next();
    console.log(content);
    $('.modal__change').removeClass('modal_view').addClass('modal_hide');
    $('.code').removeClass('code_hide').addClass('code_view');
    $('#return').on('click', function(){
        $('.modal__change').removeClass('modal_hide').addClass('modal_view');
        $('.code').removeClass('code_view').addClass('code_hide');
    });
    return false;
});
