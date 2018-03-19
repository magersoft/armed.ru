function simple_tooltip(target_items, name){
    $(target_items).each(function(i){
        $("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
        var my_tooltip = $("#"+name+i);

        $(this).removeAttr("title").mouseover(function(){
            my_tooltip.css({opacity:0.8, display:"none"}).stop().fadeIn(400);
        }).mousemove(function(kmouse){
            my_tooltip.css({left:kmouse.pageX-50, top:kmouse.pageY+15});
        }).mouseout(function(){
            my_tooltip.stop().fadeOut(400);
        });
    });
}
$(document).ready(function(){
    simple_tooltip(".tooltipShow", 'tooltip');
    //simple_tooltip(".product__question-detail","tooltip");
});