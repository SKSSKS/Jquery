(function($)
{
    $.fn.hoverText = function()
    {
        $(this).after("<div id='hoverdiv'></div>");
        //this.attr("title","");

        $(this).mouseover(function()
        {
            title = $(this).attr("title");
            $(this).attr("title",""); 
        }).mousemove(function(e)
        {

            var top = e.clientY + 10;
            var left = e.clientX + 10;

            $("#hoverdiv").css("top",top).css("left",left).show().text(title);
            
        }).mouseout(function()
        {
            $(this).attr("title",title);
            $("#hoverdiv").hide();
        })
    }
})(jQuery)