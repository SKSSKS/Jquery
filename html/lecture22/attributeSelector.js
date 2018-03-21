$(document).ready(function()
{
    emailDefault = "Enter your email....";
    $("input[type='email']").attr("value",emailDefault).focus(function()
    {
        if($(this).val()==emailDefault)
        {
            $(this).attr("value","");
        }
    }).blur(function()
    {
        if($(this).val()=="")
        {
            $(this).attr("value",emailDefault);
        }   
    });
})