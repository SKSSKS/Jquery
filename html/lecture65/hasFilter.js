$(document).ready(function()
{
    $("ul").each(function()
    {
        this_sel = $(this);
        if(this_sel.has("li").length == 0)
        {
            //alert("ul contains no li elements");

            this_sel.after("empty menu")
        }
    })
})