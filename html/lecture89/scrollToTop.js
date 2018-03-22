$(document).ready(function()
{
    $("#bottom").click(function()
    {
        $("html, body").animate({scrollTop : 0},2000);
        //$("html, body").animate({scrollTop : 0},1000);
    })
})