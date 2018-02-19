//TODO Доработать скрипт см. в ежедневнике
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