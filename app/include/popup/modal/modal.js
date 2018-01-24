$(function(){
    $('.modalLink').click(function(){

        var modal = $(document).find('.modalLink');

        for (var i = 0; i < modal.length; i++) {
                console.log(modal[i].getAttribute('data-id'));
                var element_id = '#modal_' + modal[i].getAttribute('data-id');
                console.log(element_id);
                $(element_id).fadeOut(400);
            }



        var element_id = $(this).attr('data-id');
        var close_class = $(this).attr('data-id');
        var element_close = $(this).attr('data-id');
        //получение id для закрытия модального окна
        element_close = '#close_' + element_close;
        close_class = '.close_' + close_class;
        //получение id для открытия модального окна
        element_id = '#modal_' + element_id;

        $(function(){
            $(element_id).fadeIn(400);
            $('body').css('overflow', 'hidden');
            $('.home').addClass('blurBody');
        });
        $(element_close).click(function(){
            $(element_id).fadeOut(400);
            $('body').css('overflow', 'auto');
            $('.home').removeClass('blurBody');
        });
        $(close_class).click(function(){
            $(element_id).fadeOut(400);
            $('body').css('overflow', 'auto');
            $('.home').removeClass('blurBody');
        });

        return false
    });
});