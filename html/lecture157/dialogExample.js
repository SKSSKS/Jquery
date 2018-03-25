$("#button").click(function()
{
    $("#dialog_box").attr("title","Saved").text("Setting have saved").dialog(
    {
        buttons:{"OK":function()
        {
            $(this).dialog("close");
        }},
        closeOnEscape:true,
        draggable:false,
        resizable:false,
    });
})