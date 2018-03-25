$("#tabs").tabs(
{
    collapsible:true,
    ajaxOptions:
    {
        error:function(xhr,index,status,anchor)
        {
            $(anchor.hash).text("Not able to load the page")//not working
        },
    } 
});