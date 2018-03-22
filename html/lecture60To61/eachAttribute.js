$(document).ready(function()
{
    $("#combine").click(function()
    {
        var name = "";
        failed = false;
        $("input[type='text']").each(function()
        {
            if( $(this).val() == "" )
            {
                failed = true;
            }
            else
            {
                name += $(this).val() + " ";
            }
        })
        if(failed == true)
        {
            alert("Please fill all the column");
        }
        else
        {
            $("#combined").html(name);
        }
    })
})