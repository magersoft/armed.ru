function validNameUser (value) {
    var err = 0;
    var reg = new RegExp(/[А-я]/g);
    if(value.replace(reg, '')) {
        $("#orderNameUser").notify(
            "В имени могут только русские буквы",
            {
                position:"top left",
                style: 'phoneAlertEmpty',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
        return err;
    }
}

$('#orderPhoneUser').mask('+7 (999) 999 99-99');

$('#orderNameUser').keyup(function () {
    var error = validNameUser($(this).prop('value'));
});


$('#ButtonStepTwo').on('click', function () {
    if(!$('#orderNameUser').prop('value')) {
        $("#orderNameUser").notify(
            "Поле обязательно для заполнения",
            {
                position:"top left",
                style: 'orderAlert',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
    } else {
        var phoneValid = validPhone($('#orderPhoneUser').prop('value'), $('#orderPhoneUser'));
        if (!phoneValid) {
            $('#orderNumberUser').prop('disabled', 0).addClass('StepOne__Form-Input_active');

            $("#orderNumberUser").notify(
                "Введите код из присланного СМС",
                {
                    position:"top left",
                    style: 'my',
                    autoHide: true,
                    autoHideDelay: 3000
                }
            );
        }
    }
    return false;
});

$('#orderNumberUser').keyup(function () {
    var elem = $(this).prop('value');
    if ($(this).prop('value').length == 4) {
        if ($(this).prop('value') != 0000) {
            $("#orderNumberUser").notify(
                "Код не верен",
                {
                    position:"top left",
                    style: 'myAlert',
                    autoHide: true,
                    autoHideDelay: 3000
                }
            );
        } else {
            if (window.location.pathname.slice(1).indexOf('Ur') + 1){
                document.location.href = "orderingStepTwoUr.html"
            } else {
                document.location.href = "orderingStepTwo.html"
            }
        }

    } else {
        $("#orderNumberUser").notify(
            "Вы ввели не все цифры",
            {
                position:"top left",
                style: 'myAlert',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
    }
});