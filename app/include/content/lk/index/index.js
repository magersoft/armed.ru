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
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {
        title: 'My Daily Activities',
        width: 611,
        height: 245,
        legend :{
            "position":"labeled",
            "textStyle": {
                "color": "black",
                "fontSize": "14",
                "format": "##%"
            }
        },
        pieSliceText: 'none'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}