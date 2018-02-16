$('#ButtonStepTwo').click(function () {
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