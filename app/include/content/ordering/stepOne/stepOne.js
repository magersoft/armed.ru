$('#ButtonNext').click(function () {
    $('#orderNumberUser').prop('disabled', 0).addClass('StepOne__Form-Input_active');
    $.notify.addStyle(
        'my',
        {
            html: "<div><span data-notify-text/></div>",
            classes:{
                base: {
                    "background-color": "rgba(0, 0, 255, 0.6)",
                    "color": "white",
                    "width": "500px",
                    "padding": "10px",
                    "border-radius": "4px"
                }
            }
        }
    );
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
        console.log("Молодец");
        document.location.href = "orderingStepTwo.html"
    } else {
        $("#orderNumberUser").notify(
            "Вы ввели не все цифры",
            {
                position:"top left",
                style: 'my',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
    }
});