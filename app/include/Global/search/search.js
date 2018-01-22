$(".search__content").mCustomScrollbar({
    theme:"dark",
    scrollbarPosition: "outside"
});

$('#city, #search').focusin(function(){
    var search = $(this).val();
    if (search.length >= 2) {
        $('.search').removeClass('search_hide').addClass('search_active');
        $('#search').css('width', '450px');

    }
    $('#city, #search').keypress(function(){
        var search = $(this).val();
        if (search.length >= 2) {
            $('.search').removeClass('search_hide').addClass('search_active');
            $('#search').css('width', '450px');
        }
        $('#city, #search').focusout(function () {
            $('.search').removeClass('search_active').addClass('search_hide');
            $('#search').css('width', '290px');
        });
    });
});