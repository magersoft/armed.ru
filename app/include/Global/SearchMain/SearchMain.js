function searchShow () {
    console.log("Функция Show");
    $('.SearchMain-Icon').css('display', 'none');
    $('.SearchMain-Input').removeClass('SearchHide').addClass('SearchShow');
    $('.Input_Button_Cancel').css('display', 'block');
}

function searchClose () {
    console.log("Функция");
    $('.SearchMain-Icon').css('display', 'block');
    $('.SearchMain-Input').removeClass('SearchShow').addClass('SearchHide');
    $('.Input_Button_Cancel').css('display', 'none');
}