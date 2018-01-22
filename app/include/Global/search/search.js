$(".search__content").mCustomScrollbar({
    theme:"dark",
    scrollbarPosition: "outside"
});

$('#city').focusin(function(){
    var search = $(this).val();
    if (search.length >= 2) {
        $('.popupCitySelection__search').removeClass('search_hide').addClass('search_active');
    }
    $('#city').keypress(function(){
        var search = $(this).val();
        if (search.length >= 2) {
            $('.popupCitySelection__search').removeClass('search_hide').addClass('search_active');
        }
        $('#city').focusout(function () {
            $('.popupCitySelection__search').removeClass('search_active').addClass('search_hide');
        });
    });
});
