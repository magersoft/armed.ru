function validNewsletter (value, obj) {
    var err = 0;
    var regExp = new RegExp(/.+@.+\..+/i);
    if (!value.match(regExp)) {
        $(obj).notify(
            "Введенный адрес не может существовать",
            {
                position: "top left",
                style: 'phoneAlertEmpty',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
        return err;
    }
    err = 1;
    return err;
}

$('#mailNewsletter').keyup(function () {
    validNewsletter($('#mailNewsletter').prop('value'), $('#mailNewsletter'));
});

$('#Return').click(function () {
    document.location.href = "/"
});

