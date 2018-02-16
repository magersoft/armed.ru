$(function() {
	var widget = $('.widget');
	console.log(widget);
	$(widget).stick_in_parent({offset_top: 140});
});

/*$(window).scroll(function () {
    var h = $('.widget');
   if ( $(window).scrollTop() > 85){
       h.height(720);
       h.addClass('widget_animate');
   }else {
       h.height(600);
   }
});
*/



