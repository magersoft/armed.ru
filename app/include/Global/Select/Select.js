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
        var selectsWindow = $(document).find('.Select-Catalog');
        console.log(selectsWindow);
        for (var i = 0; i < selectsWindow.length; i++) {
            $('.Select-Catalog').css('display', 'none');
        }
        $(this).next().css('display', 'flex');
        var ob = $(this);
        var select = $(this).next();
        CustomSelect(ob, select);
        $(document).click(function (event) {
            if($(event.target).closest('.Select').length){
                return;
            }
            $('.Select-Catalog').css('display', 'none');
            event.stopPropagation();
        });
        return false;
    });

});

