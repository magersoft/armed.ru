$(".search__content").mCustomScrollbar({
    theme:"dark",
    scrollbarPosition: "outside"
});

$('#search').focusout(function () {
    $('#search').animate({
        width: '290px'},500);
});

$('#city, #search, #searchMain').focusin(function(){
    var search = $(this).val();
    //$('#search').css('width', '450px');
    $('#search').animate({
        width: '450px'},500);
    if (search.length >= 2) {
        $('.search').removeClass('search_hide').addClass('search_active');


    }
    $('#city, #search, #searchMain').keypress(function(){
        var search = $(this).val();
        if (search.length >= 2) {
            $('.search').removeClass('search_hide').addClass('search_active');
            $('#search').css('width', '450px');
        }
        $('#city, #search, #searchMain').focusout(function () {
            $('.search').removeClass('search_active').addClass('search_hide');
            $('#search').css('width', '290px');
        });
    });
});