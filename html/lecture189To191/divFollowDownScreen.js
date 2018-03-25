$(document).ready(function()
{
    $("#follow").fadeIn(1000);
    var initialTop = parseInt( $("#follow").css("top") );
    $(window).scroll(function()
    {
        var top = $(window).scrollTop() + initialTop;
        $("#follow").css("top",top);
    })
})