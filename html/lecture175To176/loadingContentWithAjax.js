$(document).ready(function()
{
    $(".menu_top").click(function()
    {
        var href = $(this).attr("href");
        
        $("#content_area").hide().load(href).fadeIn(2000);
 
        return false;
    })
})