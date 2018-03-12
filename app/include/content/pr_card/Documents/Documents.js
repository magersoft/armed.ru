$('.Documents-Slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<i class="slide-right slide-right-video"></i>',
    prevArrow: '<i class="slide-left slide-left-video"></i>'
});

function appendWindowImage(link, image) {
    console.log(link);
    console.log(image);

}


var elemen = document.getElementsByClassName('Document');
if (elemen) {
    var obj = $('.Documents-Link');
    for (var i = 0; i < obj.length; i++) {
        $(obj[i]).children('.Documents-NameDocument').html($(obj[i]).children('.Documents-Image').attr('alt'));

        appendWindowImage($(obj[i]), $(obj[i]).children('.Documents-Image').attr('src'));
    }
}
