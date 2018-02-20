//TODO Доработать скрипт см. в ежедневнике

function CustomSelect (element, select_elements) {
    $(select_elements.children()).click(function () {
        console.log($(this).attr('data-value'));
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

/*
$(function () {
    $('#SelectFilter').on('click', function(){
        $('.Select-Catalog').css('display', 'flex');
        console.log($('.Select-Catalog').css('display'));
        $('.Select-Item').on('click', function(){

            $('#SelectFilter').html($(this).html());
            console.log($('#SelectFilter').html());
            $('.Select-Catalog').css('display', 'none');
            return false;

        });
        return false;
    })
});

$(function () {
    $('#SelectName').on('click', function(){
        $('.Select-Catalog').css('display', 'flex');
        console.log($('.Select-Catalog').css('display'));
        $('.Select-Item').on('click', function(){

            $('#SelectName').html($(this).html());
            console.log($('#SelectName').html());
            $('.Select-Catalog').css('display', 'none');
            return false;

        });
        return false;
    })
});*/
