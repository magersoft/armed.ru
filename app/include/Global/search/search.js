$(".search__content").mCustomScrollbar({
    theme:"dark",
    scrollbarPosition: "outside"
});

$('#city, #search').focusin(function(){
    var search = $(this).val();
    if (search.length >= 2) {
        $('.search').removeClass('search_hide').addClass('search_active');
        $('#search').animate({width: '450px'}, 400);
    }
    $('#city, #search').keypress(function(){
        var search = $(this).val();
        if (search.length >= 2) {
            $('.search').removeClass('search_hide').addClass('search_active');
            $('#search').animate({width: '450px'}, 400);
        }
        $('#city, #search').focusout(function () {
            $('.search').removeClass('search_active').addClass('search_hide');
            $('#search').animate({width: '290px'}, 400);
        });
    });
});

