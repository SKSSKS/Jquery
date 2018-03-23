$("#button").click(function()
{
    var string =  $("#text").val();

    $.post("postReverse.php",{ input : string },function(data)
    {
        $("#feedback").text(data);
    })
})