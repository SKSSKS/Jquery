$(document).ready(function()
{
    $("li").draggable(
    {
        contaiment:"document",
        revert :true,
        start:function()
        {
            content = $(this).text();
        }
    });

    $("#list").droppable(
    {
        hoverClass:"border",
        accept:".item",
        drop:function()
        {
            $("#list").append(content+"<br/>");
        }
    });
})