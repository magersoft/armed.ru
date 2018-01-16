$(function(){
    $('.modalLink').click(function(){
        var element_id = $(this).attr('data-id');
        var element_close = $(this).attr('data-id');
        //получение id для закрытия модального окна
        element_close = '#close_' + element_close;
        //получение id для открытия модального окна
        element_id = '#modal_' + element_id;
        console.log(element_close);
        console.log(element_id);


        $(function(){
            $(element_id).fadeIn(400);
            $('body').css('overflow', 'hidden');
            $('main').addClass('blurBody');
        });
        $(element_close).click(function(){
            $(element_id).fadeOut(400);
            $('body').css('overflow', 'auto');
            $('main').removeClass('blurBody');
        });
        return false
    });
});