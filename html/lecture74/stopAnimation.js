$(document).ready(function()
{
    $("#start").click(function()
    {
        $("#rabbit").toggle(4000);
    })

    $("#stop").click(function()
    {
        $("#rabbit").stop();
    })
});