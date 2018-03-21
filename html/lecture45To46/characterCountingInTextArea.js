$(document).ready(function()
{
    var maxtText = $("#textarea").attr("maxlength");
    $("#info").html(maxtText + " char remaining");
    $("#textarea").keyup(function()
    {
        var textLength = $("#textarea").val().length;
        var textRemaining = maxtText - textLength
        $("#info").html(textRemaining + " char remaining");
    });
});