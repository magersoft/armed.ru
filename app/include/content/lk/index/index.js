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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawMagazine);
google.charts.setOnLoadCallback(drawAssortiment);

function drawMagazine() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['ООО "Дезиген"', 7],
        ['ИП "SEOGROUP"', 11],
        ['ООО "Верстальщик"', 5]
    ]);

    var options = {
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

    var chart = new google.visualization.PieChart(document.getElementById('piechartMagazine'));

    chart.draw(data, options);
}
function drawAssortiment() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Рециркуляторы', 11],
        ['Кислородные концентраторы', 6],
        ['Тонометры', 2],
        ['Увлажнители воздуха', 5],
        ['Другое', 20]

    ]);

    var options = {
        legend :{
            "position":"labeled",
            "textStyle": {
                "color": "black",
                "fontSize": "14",
                "format": "##%"
            }
        },
        pieHole: 1,
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

    var chart = new google.visualization.PieChart(document.getElementById('piechartAssortiment'));

    chart.draw(data, options);
}
