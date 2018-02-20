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
    snapAmount: 207

});
