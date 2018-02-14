$('.percentage').easyPieChart({
    animate: 3000,
    lineWidth: 7,
    onStart: $.noop,
    onStop: $.noop,
    scaleColor: '#ffffff',
    trackColor: '#e0e0e0',
    barColor: '#f7c100'
});
var prec = $('.percentage').attr('data-percent');
console.log(prec);
$('.percentage').find('span').html(prec / '20');
