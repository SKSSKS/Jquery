$(document).ready(function()
{
    $("#searchText").click(function()
    {
        var key = $("#keyTosearch").val();
        $("p").removeHighlight().highlight(key);      
    })
})