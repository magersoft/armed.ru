
$('#filterData').on('focus', function () {
    $('#filterData').dateRangePicker({
        language:'ru'
    });
});

$('#FilterReset').on('click', function () {
    var selects = $(document).find('.Select');
    for (var i = 0; i < selects.length; i++) {
        var text = '<span class="StatusOrder-Text">Не выбрано</span>';
        $('.Select-Head').html(text);
        $('.Select-Head').attr('data-value', 'None');
    }
});