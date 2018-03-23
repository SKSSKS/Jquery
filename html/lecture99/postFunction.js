$("#button").click(function()
{
    var string =  $("#text").val();

    $.post("postReverse.html",{ input : string },function(data)
    {
        $("#feedback").text(data);
    })
})