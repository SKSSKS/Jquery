$("#fadein").click(function()
{
    $("#rabbit").fadeIn(1000,"linear",function()
    {
        $("#feedback").html("Image loaded");
    });
})