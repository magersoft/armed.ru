$( function() {
    $( ".auth__wrapp" ).tabs({
        active: 2,
        classes: {
            "ui-tabs-active": "auth__active-link"
        }
    });
} );

$('#button__phone').on('click', function(){
    var errorMessage =validPhone();

    if (!errorMessage) {
        var content = $('.modal__change').next();
        $('.modal__change').removeClass('modal_view').addClass('modal_hide');
        $('.code').removeClass('code_hide').addClass('code_view');
        $('#return').on('click', function () {
            $('.modal__change').removeClass('modal_hide').addClass('modal_view');
            $('.code').removeClass('code_view').addClass('code_hide');
        });
    }
    return false;
});

$('#enterySite').on('click', function () {
    var confirmMail = validMail($('#mail').prop('value'));
    var confirmPass = validPass($('#pass').prop('value'));
    if ((confirmPass == 1) && (confirmMail == 1)) {
        $("#mail").notify(
            "Через секунду вы будете перенаправлены на сайт",
            {
                position:"top left",
                style: 'my',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
        setTimeout(clouseCodModal, 1000);
    }
    return false;
});


if (document.getElementById('phone')) {
    $('#phone').mask("+7 (999) 999 99-99");
}

function validPass (value) {
    var err = 0;
    if (!value) {
        $("#pass").notify(
            "Пароль не может быть пустым",
            {
                position:"top left",
                style: 'phoneAlertEmpty',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
        return err;
    } else {
        if (value != "123") {
            $("#pass").notify(
                "Пароль не верен",
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
    err = 1;
    return err;
}

function validMail (value) {
    var err = 0;
    var regExp = new RegExp(/.+@.+\..+/i);
    if (!value) {
        $("#mail").notify(
            "Введите E-mail адрес",
            {
                position:"top left",
                style: 'phoneAlertEmpty',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
        return err;
    } else {
        if (!value.match(regExp)) {
            $("#mail").notify(
                "Введенный адрес не может существовать",
                {
                    position: "top left",
                    style: 'phoneAlertEmpty',
                    autoHide: true,
                    autoHideDelay: 3000
                }
            );
            return err;
        } else {
            if (value != 'armed@armed.ru') {
                $("#mail").notify(
                    "Введенный адрес не зарегистрирован",
                    {
                        position: "top left",
                        style: 'phoneAlertEmpty',
                        autoHide: true,
                        autoHideDelay: 3000
                    }
                );
                return err;
            }
        }
    }
    err = 1;
    return err;
}

function validPhone () {
    var err = 0;
    var phoneNunber = $('#phone').val(); // Получаем введенные данные
    var regExp = new RegExp(/[+)(-]|\s/g);
    var validNumber = phoneNunber.replace(regExp,''); // Удаляем все ненужные символы из номера
    if (!phoneNunber) { //Проверяем на не пустой или не полностью введенный номер
        $("#phone").notify(
            "Введите номер телефона",
            {
                position:"top left",
                style: 'phoneAlertEmpty',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
        err = 1;
        return err;
    }
    //TODO Должна встать передача данных на бэк с проверкой ответа сервера методом ajax
    if (!(validNumber == 71234567890)) { // Проверка на наличие в базе
        $("#phone").notify(
            "Данный номер не зарегистрирован",
            {
                position:"top left",
                style: 'phoneAlertEmpty',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
        err = 1;
        return err;
    }
}