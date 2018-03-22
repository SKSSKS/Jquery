$("#fadeout").click(function()
{
    $("#rabbit").fadeOut(1000,"linear",function()
    {
        $("#feedback").html("Image faded out");
    });
})