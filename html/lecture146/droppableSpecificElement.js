$(document).ready(function()
{
    $(".name, .place").draggable(
    {
        containment : "document",revert:true
    });

    $("#drop").droppable(
    {
        hoverClass: "changeBorder",
        tolerance:"fit",
        accept : ".name",
        over:function()
        {
            $("#msg").text("Somethin has hovered over me");
        },
        out:function()
        {
            $("#msg").text("Somthin has been dragged out");
        },
        drop:function()
        {
            $("#msg").text("Somethin dropped");
        }


    });
})