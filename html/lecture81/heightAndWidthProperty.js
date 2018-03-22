$(document).ready(function()
{
    var divWidth = $("#div").width();
    var divHeight = $("#div").css("height");//using css property
    $("#div").text("Width: "+divWidth +" Height: "+divHeight);
});