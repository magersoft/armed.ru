$('#ButtonStepOne').click(function () {
    document.location.href = "orderingStepOne.html"
});
$('#ButtonStepThree').click(function () {
    document.location.href = "orderingStepThree.html"
});

$('#ReturnStepOne_Ur').click(function () {
    document.location.href = "orderingStepOneUr.html"
});
$('#StepThree_Ur').click(function () {
    document.location.href = "orderingStepThreeUr.html"
});

var DateOrderInput = document.getElementById('orderDate');

if (DateOrderInput) {
    var NowDate = new Date;
    console.log(NowDate);
    $('#orderDate').dateRangePicker({
        language: 'ru',
        singleDate: true,
        autoClose: true,
        singleMonth: true,
        format: 'DD/MM/YYYY',
        startDate: NowDate
    });
}
