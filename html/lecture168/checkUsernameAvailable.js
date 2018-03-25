$("#username").keyup(function()
{
    var username = $(this).val();

    $("username_status").text("Serching....");
    if( username != "")
    {
        $post("username_check_page.html",{username:username},function(data)
        {

        });
    }
})