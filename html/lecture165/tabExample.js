$("#tabs").tabs(
{
    collapsible:true,
    cookie:{expire:1},
    ajaxOptions:
    {
        error:function(xhr,index,status,anchor)
        {
            $(anchor.hash).text("Not able to load the page");//not working
        }
    },
})//.find(".ui-tabs-nav").sortable({axis:"x"});//to sort the tabs