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
            $('#filterPopup').removeClass('orders__filter-popup_active').addClass('orders__filter-popup_hide');
        }
    }
);














$("#filterOpen").click(function () {
    if($('#filterPopup').css('display') == 'none') {
        $('#filterPopup').removeClass('orders__filter-popup_hide').addClass('orders__filter-popup_active');
    } else {
        $('#filterPopup').removeClass('orders__filter-popup_active').addClass('orders__filter-popup_hide');
    }
    return false
});



$('#FilterReset').on('click', function () {
    var selects = $(document).find('.Select');
    for (var i = 0; i < selects.length; i++) {
        var text = '<span class="StatusOrder-Text">Не выбрано</span>';
        $('.Select-Head').html(text);
        $('.Select-Head').attr('data-value', 'None');
    }
});



$('.date-picker-wrapper').hover(
    function () {
        console.log('hover');
    },
    function () {
        console.log('not hover');
    }
);