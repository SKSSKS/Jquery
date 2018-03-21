$("#button").click(function()
{
    var text = $("#name").val();

    //$("#displayHere").text(text) will also work
    $("#displayHere").html("<strong>"+text+"</strong>");
});