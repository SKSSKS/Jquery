$(document).ready(function()
{
    $("input[type='password']").after("<input class='sp' type='checkbox' />:Show password");

    $(".sp").change(function()
    {
        var prev = $(this).prev();
        var value = prev.val();
        var type = prev.attr("type");

        var name = prev.attr("name");
        var name = prev.attr("id");
        var clas = prev.attr("class");

        prev.remove();
        
        var typ = "password"
        if($(this).is(":checked"))
        {
            var typ = "text";
        }
        $(this).before("<input type='"+typ+"' value='" +value+ "' name='"+name+"' class='"+clas+"' />");
    })
})