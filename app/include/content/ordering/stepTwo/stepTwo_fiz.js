$('#ButtonStepOne').click(function () {
    document.location.href = "orderingStepOne.html"
});
/*
$('#ButtonStepThree').click(function () {
    document.location.href = "orderingStepThree.html"
});
*/

$('#ReturnStepOne_Ur').click(function () {
    document.location.href = "orderingStepOneUr.html"
});
$('#StepThree_Ur').click(function () {
    document.location.href = "orderingStepThreeUr.html"
});

var DateOrderInput = document.getElementById('orderDate');

if (DateOrderInput) {
    var NowDate = new Date;
    console.log(NowDate);
    $('#orderDate').dateRangePicker({
        language: 'ru',
        singleDate: true,
        autoClose: true,
        singleMonth: true,
        format: 'DD/MM/YYYY',
        startDate: NowDate
    });
}

var DateTimeInput = document.getElementById('orderTime');

if (DateTimeInput) {
    $.mask.definitions['H']='[012]';
    $.mask.definitions['h']='[01234]';
    $.mask.definitions['M']='[012345]';
    $.mask.definitions['m']='[0123456789]';

    $('#orderTime').mask("Hh:Mm");
}

function validText (value, obj) {
    var err = 0;
    var reg = new RegExp(/[А-я]/g);
    if(value.replace(reg, '')) {
        $(obj).notify(
            "В названии могут только русские буквы",
            {
                position:"top left",
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

function validNumber (value, obj) {
    var err = 0;
    var reg = new RegExp(/^[0-9]/);
    if (!value.match(reg)) {
        $(obj).notify(
            "Номер может начинаться только с цифры",
            {
                position:"top left",
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


$('#ButtonStepThree').click(function () {
    if (!$('#orderCity').prop('value')) {
        $("#orderCity").notify(
            "Поле обязательно для заполнения",
            {
                position:"top left",
                style: 'orderAlert',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
    } else {
        var errCity = validText($('#orderCity').prop('value'), $('#orderCity'));

    }
    if (!$('#orderStreets').prop('value')) {
        $("#orderStreets").notify(
            "Поле обязательно для заполнения",
            {
                position:"top left",
                style: 'orderAlert',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
    } else {
        var errStreet = validText($('#orderStreets').prop('value'), $('#orderStreets'));
    }

    if (!$('#orderHouse').prop('value')) {
        $("#orderHouse").notify(
            "Поле обязательно для заполнения",
            {
                position:"top left",
                style: 'orderAlert',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
    } else {
        var errHouse = validNumber($('#orderHouse').prop('value'), $('#orderHouse'));
    }
    if (!$('#orderFlat').prop('value')) {
        $("#orderFlat").notify(
            "Поле обязательно для заполнения",
            {
                position:"top left",
                style: 'orderAlert',
                autoHide: true,
                autoHideDelay: 3000
            }
        );
    } else {
        var errFlat = validNumber($('#orderFlat').prop('value'), $('#orderFlat'));
    }

    if (errCity&&errStreet&&errHouse&&errFlat) {
        document.location.href = "orderingStepThree.html"
    }
    return false;
});