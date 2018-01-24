$('#button__recovery').on('click', function(){
    var content = $('.modal__change').next();
    console.log(content);
    $('.modal__change').removeClass('modal_view').addClass('modal_hide');
    $('.successRecovery').removeClass('successRecovery_hide').addClass('successRecovery_view');
    return false;
});
