$("#button").click(function()
{
    $.ajax(
        {
            url : "load.html",
            success:function(data)
            {
                $("#content").html(data);
            }   
        })
})