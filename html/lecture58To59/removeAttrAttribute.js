$(document).ready(function()
{
    $("#agree").change(function()
    {
        var state = $(this).is(":checked"); // val() attr("value") not working
        if(state==true)
        {
            $("#continue").removeAttr("disabled");
        }
        else if(state == false)
        {
            $("#continue").attr("disabled","disabled");
        }
        //alert(state);
    })
})