var val = $('.LkIndex-ProgressBar').attr('data-value');
var max = $('.LkIndex-ProgressBar').attr('data-max');
var min = $('.LkIndex-ProgressBar').attr('data-min');
$('.LkIndex-Count_Val').html(val + '%');
$('.LkIndex-ProgressBar_Max').html(max + '%') ;
$('.LkIndex-ProgressBar_Min').html(min + '%');

$('.LkIndex-ProgressBar').progressbar({
    classes: {
        "ui-progressbar": "LkIndex-ProgressBar",
        "ui-progressbar-value" : "LkIndex-ProgressBar_Value"
    },
    max: parseInt(max),
    min: parseInt(min),
    value: parseInt(val)
});


var path = window.location.pathname.slice(1);
if (path == 'lk_index.html') {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawMagazine);
    google.charts.setOnLoadCallback(drawAssortiment);

    //Опции для пирогов
    var optionChart = {
        legend :{
            "position":"labeled",
            "textStyle": {
                "color": "black",
                "fontSize": "14",
                "format": "##%"
            }
        },
        pieHole: 0.5,
        colors: [
            'rgb(151, 204, 100)',
            'rgb(255, 217, 99)',
            'rgb(253, 90, 62)',
            'rgb(119, 182, 231)',
            'rgb(169, 85, 184)',
            'rgb(220, 157, 107)',
            'rgb(234, 82, 127)',
            'rgb(69, 105, 188)',
            'rgb(75, 160, 98)'
        ],
        pieSliceText: 'none'
    };

    //Данные дял передачи в пироги
    var magazineData =
        [
            ['Name', 'Count'],
            ['ООО "Дезиген"', 7],
            ['ИП "SEOGROUP"', 11],
            ['ООО "Верстальщик"', 5]
        ];
    var assotimentData =
        [
            ['Name', 'Count'],
            ['Рециркуляторы', 11],
            ['Кислородные концентраторы', 6],
            ['Тонометры', 2],
            ['Увлажнители воздуха', 5],
            ['Другое', 20]
        ];

    function drawMagazine() {

        var data = google.visualization.arrayToDataTable(magazineData);
        var options = optionChart;
        var chart = new google.visualization.PieChart(document.getElementById('piechartMagazine'));
        chart.draw(data, options);
    }

    function drawAssortiment() {

        var data = google.visualization.arrayToDataTable(assotimentData);
        var options = optionChart;
        var chart = new google.visualization.PieChart(document.getElementById('piechartAssortiment'));
        chart.draw(data, options)}

    }


var slider = $('.LkIndex-Slider');

slider.on('init', function (event, slick) {
    $('.LkIndex-SliderPromoCount').html('1 / ' + (slick.slideCount));
});

slider.slick({
    infinite: true,
    slidesToShow: 1,
    variableWidth: false,
    nextArrow: '<i class="slide-right"></i>',
    prevArrow: '<i class="slide-left"></i>'
});

var count = slider.slick("getSlick").slideCount;
slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.LkIndex-SliderPromoCount').html(nextSlide + 1 + ' / ' + count);
});


var ProductSlider = $('.LkIndex-ProductWrap');
ProductSlider.on('init', function (event, slick) {
    $('.LkIndex-ProductCount').html('1 / ' + (slick.slideCount));
});

$('.LkIndex-ProductWrap').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    adaptiveHeight: true,
    nextArrow: '<i class="LkIndex-ProductWrap_ArrowLeft"></i>',
    prevArrow: '<i class="LkIndex-ProductWrap_ArrowRight"></i>'
});

ProductSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.LkIndex-ProductCount').html(nextSlide + 1  + ' / ' + (slick.slideCount));
});



var VideoSlider = $('.LkIndex-VideoWrap');
VideoSlider.on('init', function (event, slick) {
    $('.LkIndex-VideoCount').html('1 / ' + (slick.slideCount));
});

$('.LkIndex-VideoWrap').slick({
    nextArrow: '<i class="LkIndex-VideoWrap_ArrowLeft"></i>',
    prevArrow: '<i class="LkIndex-VideoWrap_ArrowRight"></i>'
});

VideoSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log('change');
    $('.LkIndex-VideoCount').html(nextSlide + 1  + ' / ' + (slick.slideCount));
});


//TODO Добавить внутренний скрол, для действующих акций