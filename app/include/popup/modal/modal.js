$(function(){
    $('.modalLink').click(function(){

        var modal = $(document).find('.modalLink');

        for (var i = 0; i < modal.length; i++) {
                var element_id = '#modal_' + modal[i].getAttribute('data-id');
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
            value = $(this).text();
            var date = new Date(new Date().getTime() + 60 * 1000);
            document.cookie =  "city=" + value + "; path=/; expires=" + date.toUTCString();
            console.log("set city " + value);
            $(element_id).fadeOut(400);
            $('body').css('overflow', 'auto');
            $('.home').removeClass('blurBody');
        });

        return false
    });
});