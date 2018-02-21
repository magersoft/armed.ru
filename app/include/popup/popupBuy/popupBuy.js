$('.quick-check').change(function () {
        var color = $(this).parent().find("span").css('color');

        if (color == 'rgb(189, 189, 189)') {
            $(this).parent().find("span").css('color', 'rgb(130, 130, 130)');
            $('.quickbuy__select').addClass('quickbuy__select-add');
            $('.quickbuy__select').attr('disabled', false);
            console.log($('.quickbuy__select').attr('disabled'));
        } else if (color == 'rgb(130, 130, 130)') {
            $(this).parent().find("span").css('color', 'rgb(189, 189, 189)');
            $('.quickbuy__select').removeClass('quickbuy__select-add');
            $('.quickbuy__select').attr('disabled', true);
        }
    });
