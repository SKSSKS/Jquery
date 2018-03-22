$(document).ready(function()
{
    $("#msg").slideDown(1000,"linear");

    $("#toggle").click(function()
    {
        $("#msg").slideToggle(1000,"linear");
    })
})