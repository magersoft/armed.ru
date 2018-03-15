$(function () {
    $('#checkbox').click(function () {
        var check = $('#checkbox').prop('checked');
        if (check) {
            $('#entity, .control-checkbox').prop('disabled', false);
            console.log("false");
            $('.check__form-label--entity').css('color', '#828282');
        } else {
            $('#entity, .control-checkbox').prop('disabled', true);
            console.log("true");
            $('.check__form-label--entity').css('color', '#bdbdbd')
        }
    });

})
