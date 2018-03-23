$(document).ready(function()
{
    $("#drag").draggable(
    {
        containment : "document",revert:true
    });

    $("#drop").droppable(
    {
        hoverClass: "changeBorder",
        tolerance:"fit"
    });
})