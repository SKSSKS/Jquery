$(document).ready(function()
{
    $("#drag").draggable({cursor : "pointer",opacity:0.6,grid :[20,20],revert:true,start:function()
    {
        $("#msg").text("Drag started");
    },drag:function()
    {
        $("#msg").text("Dragging");
    },stop:function()
    {
        $("#msg").text("Dragging stoped");
    }
});
})