$('.percentage').easyPieChart({
    animate: 3000,
    lineWidth: 10,
    onStart: $.noop,
    onStop: $.noop
});


var prec = $('.percentage').attr('data-percent');
console.log(prec);
$('.percentage').find('span').html(prec + ' %');
