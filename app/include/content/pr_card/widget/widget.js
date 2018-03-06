if(window.location.toString().indexOf('prcard_index.html')>0)
	{
		$(function() {
			var widget = $('.widget');
			$(widget).stick_in_parent({offset_top: 140});
		});
        var random = Math.round(Math.random());
        console.log(random);
		if (!random) {
			$('.Tempory-BlockButtonChange_Basket').css('display', 'flex');
		} else {
            $('.Tempory-BlockButtonChange_Pred').css('display', 'flex');
		}
	}

