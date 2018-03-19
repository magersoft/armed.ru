$( ".TabsWrap" ).tabs({
    active: 0,
    classes: {
        "ui-tabs-active": "tabs__active"
    }
});

$(".scroll-row").mCustomScrollbar({
    theme:"compare",
    axis: "x",
    advanced:{ autoExpandHorizontalScroll: true },
    scrollbarPosition: "outside",
    snapAmount: 215

});

$(function () {
    $('.TrHover').hover(
        function () {
            //console.log("hover");
            var data_id =$(this).attr('data-id');
            //console.log(data_id);
            var trElements = $(document).find('.TrHover');
            //console.log(trElements);
            //var itogElements = [];
            for (var i = 0; i < trElements.length; i++){
                //console.log(trElements[i]);
                if ($(trElements[i]).attr('data-id') == data_id){
                    $(trElements[i]).addClass('TrHover_Active');
                    //console.log(trElements[i]);
                    //itogElements += trElements[i];
                }
            }
            //console.log(itogElements);
        },
        function () {
            //console.log("not hover");
            var data_id =$(this).attr('data-id');
            //console.log(data_id);
            var trElements = $(document).find('.TrHover');
            //console.log(trElements);
            //var itogElements = [];
            for (var i = 0; i < trElements.length; i++){
                //console.log(trElements[i]);
                if ($(trElements[i]).attr('data-id') == data_id){
                    $(trElements[i]).removeClass('TrHover_Active');
                    //console.log(trElements[i]);
                    //itogElements += trElements[i];
                }
            }
        }
    )
});
