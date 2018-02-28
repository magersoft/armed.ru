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

if (document.getElementById('phone')) {
    $('#phone').mask("+7 (999) 999 99-99");
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