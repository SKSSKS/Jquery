$("#button").click(function()
{
    var name = $("#name").val();
    $.ajax(
    {
        url:"load.html",
        data:"name="+name,
        success:function(data)
        {
            $("#content").html(data);
        }
    })
})