$(".hover").mousemove(function(e)
{
    //to get the hover text
    var hoverText = $(this).attr("hovertext");

    //show to show(display:none) css to set top and left
    $("#hoverdiv").show().text(hoverText).css("top",e.clientY+10).css("left",e.clientX+10);
}).mouseout(function()
{
    $("#hoverdiv").hide();
});



/* $(".hover").mousemove(function(coordinates)
{
    // to get the mouse coordinates
    //$("#coords").text("X:"+coordinates.clientX+" Y:"+coordinates.clientY);
    var hoverText = $(this).attr("hovertext");
    $(this).attr("title",hoverText);
}).mouseleave(function()
{
    $("#coords").text("");
}); */