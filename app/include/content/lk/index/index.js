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