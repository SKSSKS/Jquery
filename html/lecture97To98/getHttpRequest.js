$("#button").click(function()
{
    var string =  $("#text").val();

    $.get("reverse.php",{ input : string },function(data)
    {
        $("#feedback").text(data);
    })
})