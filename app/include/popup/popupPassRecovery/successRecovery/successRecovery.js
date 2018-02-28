$('#button__recovery').on('click', function(){

    var errValidMail = validMail($('#recoveryMail').prop('value'), $('#recoveryMail'));

    if (errValidMail == 1) {
        //var content = $('.modal__change').next();
        //console.log(content);
        $('.modal__change').removeClass('modal_view').addClass('modal_hide');
        $('.successRecovery').removeClass('successRecovery_hide').addClass('successRecovery_view');
        $('#return').on('click', function(){
            $('.modal__change').removeClass('modal_hide').addClass('modal_view');
            $('.successRecovery').removeClass('successRecovery_view').addClass('successRecovery_hide');
        });
    }
    return false;
});
