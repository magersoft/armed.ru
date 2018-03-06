$('#ReturnStepTwo_Ur').click(function () {
    document.location.href = "orderingStepTwoUr.html"
});

/*
$('#StepFour_Ur').click(function () {
    return false;
    //document.location.href = "orderingStepFourUr.html"
});
*/

var validData = [];
$('#StepFour_Ur').click(function () {
    var errCity = validEmpty($('#orderCity_Ur').prop('value'), $('#orderCity_Ur'));
    if (errCity) {
        errCity = validText($('#orderCity_Ur').prop('value'), $('#orderCity_Ur'));
        if (errCity) {
            validData['City'] = true;
            notification($('#orderCity_Ur'), 'my', 'Данные валидны');
        } else {
            validData['City'] = false
        }
    } else {
        validData['City'] = false
    }

    var errSrteet = validEmpty($('#orderStreets_Ur').prop('value'), $('#orderStreets_Ur'));
    if (errSrteet) {
        errSrteet = validText($('#orderStreets_Ur').prop('value'), $('#orderStreets_Ur'));
        if (errSrteet) {
            validData['Street'] = true;
            notification($('#orderStreets_Ur'), 'my', 'Данные валидны');
        } else {
            validData['Street'] = false
        }
    } else {
        validData['Street'] = false
    }

    var errHome = validEmpty($('#orderHouse_Ur').prop('value'), $('#orderHouse_Ur'));
    if (errHome) {
        errHome = validNumber($('#orderHouse_Ur').prop('value'), $('#orderHouse_Ur'));
        if (errHome) {
            validData['Home'] = true;
            notification($('#orderHouse_Ur'), 'my', 'Данные валидны');
        } else {
            validData['Home'] = false
        }
    } else {
        validData['Home'] = false
    }

    var errKorp = validEmpty($('#orderFlat_Ur').prop('value'), $('#orderFlat_Ur'));
    if (errKorp) {
        errKorp = validNumber($('#orderFlat_Ur').prop('value'), $('#orderFlat_Ur'));
        if (errKorp) {
            validData['Korp'] = true;
            notification($('#orderFlat_Ur'), 'my', 'Данные валидны');
        } else {
            validData['Korp'] = false
        }
    } else {
        validData['Korp'] = false
    }

    var errOfficce = validEmpty($('#orderOffice_Ur').prop('value'), $('#orderOffice_Ur'));
    if (errOfficce) {
        errOfficce = validNumber($('#orderOffice_Ur').prop('value'), $('#orderOffice_Ur'));
        if (errOfficce) {
            validData['Officce'] = true;
            notification($('#orderOffice_Ur'), 'my', 'Данные валидны');
        } else {
            validData['Officce'] = false
        }
    } else {
        validData['Officce'] = false
    }

    console.log(validData);
    var status = false;
    for (validElement in validData) {
        if (!validData[validElement]) {
            status = false;
            break;
        } else {
            status = true;
        }
    }
    console.log(status);
    if (status) {
        document.location.href = "orderingStepFourUr.html"
    }

    return false
});