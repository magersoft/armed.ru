$(function () {
    $('#checkbox').click(function () {
        var check = $('#checkbox').prop('checked');
        if (check) {
            $('#entity').prop('disabled', false);
            $('.check__form-label--entity').css('color', '#828282');
        } else {
            $('#entity').prop('disabled', true);
            $('.check__form-label--entity').css('color', '#bdbdbd')
        }

    });

})