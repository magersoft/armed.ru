function notification (ob, style, message) {
    $(ob).notify(
        message,
        {
            position:"top left",
            style: style,
            autoHide: true,
            autoHideDelay: 3000
        }
    );
}

function validEmpty (value, obj,) {
    var err = false;
    if (!value) {
        notification(obj, 'orderAlert', "Поле должно быть заполнено");
        return err;
    }
    err = true;
    return err;
}



function validateBik(bik, ob) {
    var result = false;
    if (typeof bik === 'number') {
        bik = bik.toString();
    } else if (typeof bik !== 'string') {
        bik = '';
    } else if (/[^0-9]/.test(bik)) {
        notification(ob, 'orderAlert', 'БИК может состоять только из цифр');
    } else if (bik.length !== 9) {
        notification(ob, 'orderAlert', 'БИК может состоять только из 9 цифр');
    } else {
        notification(ob, 'my', 'Данные валидны');
        result = true;
    }

    return result;
}
function validateInn(inn, ob) {
    var result = false;
    if (typeof inn === 'number') {
        inn = inn.toString();
    } else if (typeof inn !== 'string') {
        inn = '';
    }
    if (/[^0-9]/.test(inn)) {
        notification(ob, 'orderAlert', 'ИНН может стостоять только из цифр');
    } else if ([10, 12].indexOf(inn.length) === -1) {
        notification(ob, 'orderAlert', 'ИНН может состоять только из 10 или 12 цифр');
    } else {
        var checkDigit = function (inn, coefficients) {
            var n = 0;
            for (var i in coefficients) {
                n += coefficients[i] * inn[i];
            }
            return parseInt(n % 11 % 10);
        };
        switch (inn.length) {
            case 10:
                var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if (n10 === parseInt(inn[9])) {
                    result = true;
                    notification(ob, 'my', 'Данные валидны');
                }
                break;
            case 12:
                var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                if ((n11 === parseInt(inn[10])) && (n12 === parseInt(inn[11]))) {
                    result = true;
                    notification(ob, 'my', 'Данные валидны');
                }
                break;
        }
        if (!result) {
            notification(ob, 'orderAlert', 'Неправильное контрольное число (ИНН не существует)');
        }
    }

    return result;
}
function validateKpp(kpp, ob) {
    var result = false;
    if (typeof kpp === 'number') {
        kpp = kpp.toString();
    } else if (typeof kpp !== 'string') {
        kpp = '';
    }
    if (kpp.length !== 9) {
        notification(ob, 'orderAlert', 'КПП может состоять только из 9 знаков (цифр или заглавных букв латинского алфавита от A до Z)')
    } else if (!/^[0-9]{4}[0-9A-Z]{2}[0-9]{3}$/.test(kpp)) {
        notification(ob, 'orderAlert', 'Неправильный формат КПП')
    } else {
        result = true;
        notification(ob, 'my', 'Данные валидны');
    }
    return result;
}
function validateKs(ks, bik, bikValid, ob) {
    var result = false;
    if (!bikValid) {
        notification(ob, 'orderAlert', 'Для проверки К/С необходимо заполнить БИК');
    }
    if (bikValid) {
        if (typeof ks === 'number') {
            ks = ks.toString();
        } else if (typeof ks !== 'string') {
            ks = '';
        }
        if (/[^0-9]/.test(ks)) {
            notification(ob, 'orderAlert', 'К/С может состоять только из цифр');
        } else if (ks.length !== 20) {
            notification(ob, 'orderAlert', 'К/С может состоять только из 20 цифр');
        } else {
            var bikKs = '0' + bik.toString().slice(4, 6) + ks;
            var checksum = 0;
            var coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
            for (var i in coefficients) {
                checksum += coefficients[i] * (bikKs[i] % 10);
            }
            if (checksum % 10 === 0) {
                result = true;
                notification(ob, 'my', 'Данные валидны');
            } else {
                notification(ob, 'orderAlert', 'Данные не валидны (такой К/С не существует');
            }
        }
    }
    return result;
}
function validateRs(rs, bik, bikValid, ob) {
    var result = false;
    if (!bikValid) {
        notification(ob, 'orderAlert', 'Для проверки Р/С необходимо заполнить БИК');
    }
    if (bikValid) {
        if (typeof rs === 'number') {
            rs = rs.toString();
        } else if (typeof rs !== 'string') {
            rs = '';
        }
        if (/[^0-9]/.test(rs)) {
            //error.code = 2;
            //error.message = 'Р/С может состоять только из цифр';
            notification(ob, 'orderAlert', 'Р/С может состоять только из цифр');
        } else if (rs.length !== 20) {
            //error.code = 3;
            //error.message = 'Р/С может состоять только из 20 цифр';
            notification(ob, 'orderAlert', 'Р/С может состоять только из 20 цифр');
        } else {
            var bikRs = bik.toString().slice(-3) + rs;
            var checksum = 0;
            var coefficients = [7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
            for (var i in coefficients) {
                checksum += coefficients[i] * (bikRs[i] % 10);
            }
            if (checksum % 10 === 0) {
                result = true;
                notification(ob, 'my', 'Данные валидны');
            } else {
                //error.code = 4;
                //error.message = 'Неправильное контрольное число';
                notification(ob, 'orderAlert', 'Данные не валидны (такой Р/С не существует');
            }
        }
    }
    return result;
}
function validateOgrn(ogrn, ob) {
    var result = false;
    if (typeof ogrn === 'number') {
        ogrn = ogrn.toString();
    } else if (typeof ogrn !== 'string') {
        ogrn = '';
    }
    if (/[^0-9]/.test(ogrn)) {
        //error.code = 2;
        //error.message = 'ОГРН может состоять только из цифр';
        notification(ob, 'orderAlert', 'ОГРН может состоять только из цифр')
    } else if (ogrn.length !== 13) {
        //error.code = 3;
        //error.message = 'ОГРН может состоять только из 13 цифр';
        notification(ob, 'orderAlert', 'ОГРН может состоять только из 13 цифр')
    } else {
        var n13 = parseInt((parseInt(ogrn.slice(0, -1)) % 11).toString().slice(-1));
        if (n13 === parseInt(ogrn[12])) {
            result = true;
            notification(ob, 'my', 'Данные валидны');
        } else {
            //error.code = 4;
            //error.message = 'Неправильное контрольное число';
            notification(ob, 'orderAlert', 'Неправильное контрольное число (ОГРН не существует)')
        }
    }
    return result;
}

/*

function validateOgrnip(ogrnip, error) {
    var result = false;
    if (typeof ogrnip === 'number') {
        ogrnip = ogrnip.toString();
    } else if (typeof ogrnip !== 'string') {
        ogrnip = '';
    }
    if (!ogrnip.length) {
        error.code = 1;
        error.message = 'ОГРНИП пуст';
    } else if (/[^0-9]/.test(ogrnip)) {
        error.code = 2;
        error.message = 'ОГРНИП может состоять только из цифр';
    } else if (ogrnip.length !== 15) {
        error.code = 3;
        error.message = 'ОГРНИП может состоять только из 15 цифр';
    } else {
        var n15 = parseInt((parseInt(ogrnip.slice(0, -1)) % 13).toString().slice(-1));
        if (n15 === parseInt(ogrnip[14])) {
            result = true;
        } else {
            error.code = 4;
            error.message = 'Неправильное контрольное число';
        }
    }
    return result;
}
function validateSnils(snils, error) {
    var result = false;
    if (typeof snils === 'number') {
        snils = snils.toString();
    } else if (typeof snils !== 'string') {
        snils = '';
    }
    if (!snils.length) {
        error.code = 1;
        error.message = 'СНИЛС пуст';
    } else if (/[^0-9]/.test(snils)) {
        error.code = 2;
        error.message = 'СНИЛС может состоять только из цифр';
    } else if (snils.length !== 11) {
        error.code = 3;
        error.message = 'СНИЛС может состоять только из 11 цифр';
    } else {
        var sum = 0;
        for (var i = 0; i < 9; i++) {
            sum += parseInt(snils[i]) * (9 - i);
        }
        var checkDigit = 0;
        if (sum < 100) {
            checkDigit = sum;
        } else if (sum > 101) {
            checkDigit = parseInt(sum % 101);
            if (checkDigit === 100) {
                checkDigit = 0;
            }
        }
        if (checkDigit === parseInt(snils.slice(-2))) {
            result = true;
        } else {
            error.code = 4;
            error.message = 'Неправильное контрольное число';
        }
    }
    return result;
}
*/











var validData = [];

$('#StepThree_Ur').click(function () {
    //TODO Для включения валидации удалть следующую строку и раскоментить код
    document.location.href = "orderingStepThreeUr.html"
    /*var errCompany = validEmpty($('#company').prop('value'), $('#company'));
    if (errCompany) {
        validData['Company'] = true;
    } else {
        validData['Company'] = false;
    }

    var errLegal = validEmpty($('#legal').prop('value'), $('#legal'));
    if (errLegal) {
        validData['Legal'] = true;
    } else {
        validData['Legal'] = false;
    }

    var errInn = validEmpty($('#inn').prop('value'), $('#inn'));
    if (errInn) {
        validData['Inn'] = validateInn($('#inn').prop('value'), $('#inn'));
    } else {
        validData['Inn'] = false;
    }

    var errBik = validEmpty($('#bik').prop('value'), $('#bik'));
    if (errBik) {
        validData['Bik'] = validateBik($('#bik').prop('value'), $('#bik'))
    } else {
        validData['Bik'] = false;
    }

    var errKpp = validEmpty($('#kpp').prop('value'), $('#kpp'));
    if (errKpp) {
        validData['Kpp'] = validateKpp($('#kpp').prop('value'), $('#kpp'));
    } else {
        validData['Kpp'] = false;
    }

    var errKs = validEmpty($('#ks').prop('value'), $('#ks'));
    if (errKs) {
        validData['Ks'] = validateKs($('#ks').prop('value'), $('#bik').prop('value'), validData['Bik'], $('#ks'));
    } else {
        validData['Ks'] = false;
    }

    var errRs = validEmpty($('#rs').prop('value'), $('#rs'));
    if (errRs) {
        validData['Rs'] = validateRs($('#rs').prop('value'), $('#bik').prop('value'), validData['Bik'], $('#rs'));
    } else {
        validData['Rs'] = false;
    }

    var errOgrn = validEmpty($('#ogrn').prop('value'), $('#ogrn'));
    if (errOgrn) {
        validData['Ogrn'] = validateOgrn($('#ogrn').prop('value'), $('#ogrn'));
    } else {
        validData['Ogrn'] = false;
    }

    var errBank = validEmpty($('#bank').prop('value'), $('#bank'));
    if (errBank) {
        validData['Bank'] = true;
    } else {
        validData['Bank'] = false;
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
        document.location.href = "orderingStepThreeUr.html"
    }

    return false;*/
});