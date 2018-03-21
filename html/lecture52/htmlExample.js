$("#copyButton").click(function()
{
    var grabtext = $("#text").text(); // this will also work : var grabtext = $("#text").html();
    $("#pest").html("<strong>"+grabtext+"</strong>");
});