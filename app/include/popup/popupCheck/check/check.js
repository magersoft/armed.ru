$(function () {
    $('#checkbox').click(function () {
        var check = $('#checkbox').prop('checked');
        if (check) {
            $('#entity').prop('disabled', false);
        } else {
            $('#entity').prop('disabled', true);
        }

    });

})