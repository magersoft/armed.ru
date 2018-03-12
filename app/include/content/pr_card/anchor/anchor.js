$(".anchor").stick_in_parent({offset_top: 60});

function onScroll(){
    var scrollPos = $(document).scrollTop();
    var link = $('.anchor__item-link');
    $(link).each(function () {
        var currLink = $(this);
        var refElement = $(currLink);
        var href = $(currLink).attr("href");
        var DivObj = $('div[id="' + href.replace('#', '') + '"]');
        if (DivObj.position().top <= scrollPos && DivObj.position().top + DivObj.height() > scrollPos) {
            $('.anchor__item-link[href="' + href +'"]').parent().removeClass("active__anchor");
            currLink.parent().addClass("active__anchor");
        }
        else{
            currLink.parent().removeClass("active__anchor");
        }
    });
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

