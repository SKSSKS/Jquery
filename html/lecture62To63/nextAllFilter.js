$(document).ready(function()
{
    $(".menu").find("li").first().addClass("bold").click(function()
    {
        $(this).nextAll().toggle();
    })
})