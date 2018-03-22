$('.table-icon__like, .product__icon_favorite').click(function () {
    //e.preventDefault();
    $(this).toggleClass('likeAdd');
});
$('.quickview-inner_buy__icons-like').click(function () {
    //e.preventDefault();
    $(this).toggleClass('likeAdd-Big');
});
$(' .product__icon_favorite_list').click(function () {
    //e.preventDefault();
    $(this).toggleClass('likeNone');
});