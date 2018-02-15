
$('#addcoupone').click(function () {
    $('.coupone-block').css('display', 'flex');
    $('.cart__total-coupone_button').css('justify-content', 'space-between');
});
$('.orders-click-ur').click(function(){
	$('.orders-ur').css('display', 'block');
	$('.orders-fiz').css('display', 'none');
});
$('.orders-click-fiz').click(function(){
	$('.orders-fiz').css('display', 'block');
	$('.orders-ur').css('display', 'none');
	$('.orders-fiz').css('width', '600px');
});