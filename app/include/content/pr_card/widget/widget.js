if(window.location.toString().indexOf('prcard_index.html')>0)
{
$(function() {
	var widget = $('.widget');
	console.log(widget);
	$(widget).stick_in_parent({offset_top: 140});
})

};
