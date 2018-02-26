var DateRangeInput = document.getElementById('filterData');

if (DateRangeInput) {
    $('#filterData').dateRangePicker({
        language: 'ru'
    });
}

$('.asside_right').hover(
    function LkShow () {
        $(this).removeClass('LkAside-Hide').addClass('LkAside-Show');
    },
    function LkHide () {
        var DataRangeDisplay = $('.date-picker-wrapper').css('display');
        if (DataRangeDisplay !='block') {
            $(this).removeClass('LkAside-Show').addClass('LkAside-Hide');
            $('#filterPopup').removeClass('LkFilterShow').addClass('LkFilterHide');
        }
    }
);


$("#filterOpen").click(function () {
    if($('#filterPopup').hasClass('LkFilterHide')) {
        $('#filterPopup').removeClass('LkFilterHide').addClass('LkFilterShow');
    } else {
        $('#filterPopup').removeClass('LkFilterShow').addClass('LkFilterHide');
    }
    return false
});



$('#FilterReset').on('click', function () {
    var selects = $(document).find('.Select');
    for (var i = 0; i < selects.length; i++) {
        var text = '<span class="StatusOrder-Text StatusOrder-Text_Placeholder">Не выбрано</span>';
        $('.Select-Head').html(text);
        $('.Select-Head').attr('data-value', 'None');
    }
});

if(window.location.toString().indexOf('lk_orders.html')>0){
    $('.orders-filtr').removeClass('orders-filtr');
};