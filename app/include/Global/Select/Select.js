//TODO Доработать скрипт см. в ежедневнике

function CustomSelect (element, select_elements) {
    $(select_elements.children()).click(function () {
        $(element).attr('data-value', $(this).attr('data-value'));
        $(element).html($(this).html());
        $(element).next().css('display', 'none');
        return false;
    });

}

$(function () {
    $('.Select-Head').on('click', function () {
        $(this).next().css('display', 'flex');
        var ob = $(this);
        var select = $(this).next();
        CustomSelect(ob, select);
        return false;
    });

});

