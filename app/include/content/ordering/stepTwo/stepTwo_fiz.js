$('#ButtonStepOne').click(function () {
    document.location.href = "orderingStepOne.html"
});
$('#ButtonStepThree').click(function () {
    document.location.href = "orderingStepThree.html"
});

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


/*
$('#orderTime').on('keypress', function (e) {
    console.log(e);
    e = e || event;

    if (e.ctrlKey || e.altKey || e.metaKey) return;

    var chr = getChar(e);

    // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
    // на всякий случай лучше вынести проверку chr == null отдельно
    if (chr == null) return;

    if (chr < '0' || chr > '9') {
        return false;
    }
})

function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
    }

    return null; // специальная клавиша
}*/
