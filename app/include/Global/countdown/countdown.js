// До конца ферваля месяца
$('#date_2802').countdown('2018/04/01').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
        + '<span class="countdown-section"><span class="countdown-amount">%D</span> <span class="countdown-period">Дней</span> </span>'
        + '<span class="countdown-section"><span class="countdown-amount">%H</span> <span class="countdown-period">Часов</span> </span>'
        + '<span class="countdown-section"><span class="countdown-amount">%M</span> <span class="countdown-period">Минут</span> </span>'
        + '<span class="countdown-section"><span class="countdown-amount">%S</span> <span class="countdown-period">Секунд</span> </span>'));
});