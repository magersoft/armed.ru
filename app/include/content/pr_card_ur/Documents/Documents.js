$('.Documents-Slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<i class="slide-right slide-right-video"></i>',
    prevArrow: '<i class="slide-left slide-left-video"></i>'
});

function printZone (link, imageSrc) {
        var zone = '<div class=\"Documents-Print\">';
        zone = zone + '<a class=\"Documents-LinkOpen\" href=\"'+ imageSrc +'\" data-lightbox=\"DocumentsImage\">';
        zone = zone + '<a class=\"Documents-LinkPrint\" href=\"' + imageSrc + '\" onclick=\"imagePrint($(this).attr(\'href\'))\; return false\;\">Распечатать</a>';
        zone = zone + '<a class=\"Documents-LinkSave\" href="' + imageSrc + '\">Сохранить</a>';
        zone = zone + '</div>';
        link.parent().append(zone);
        //console.log(zone);
}

function imagePrint (image) {
    console.log(image);
    var imageWindow = window.open(image);
    imageWindow.print();
    return false;
}


var elemen = document.getElementsByClassName('Document');
if (elemen) {
    var obj = $('.Documents-Link');
    for (var i = 0; i < obj.length; i++) {
        $(obj[i]).children('.Documents-NameDocument').html($(obj[i]).children('.Documents-Image').attr('alt'));

        printZone($(obj[i]), $(obj[i]).children('.Documents-Image').attr('src'));
    }
}

/*
<div class="Documents-Print">
    <a class="Documents-LinkPrint" href="images/Documents/Documents_1.jpg" onclick="imagePrint($(this).attr('href')); return false;" tabindex="0">Распечатать</a>
    <a class="Documents-LinkSave" href="#" tabindex="0">Сохранить</a>
</div>
*/
