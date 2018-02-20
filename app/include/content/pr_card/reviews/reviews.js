
$('.percentage').easyPieChart({
    animate: 3000,
    lineWidth: 7,
    onStart: $.noop,
    onStop: $.noop,
    scaleColor: '#ffffff',
    trackColor: '#e0e0e0',
    barColor: '#f7c100'
});
if(window.location.toString().indexOf('prcard_index.html')>0){ 
var prec = $('.percentage').attr('data-percent');
$('.percentage').find('span').html(prec / '20');
};