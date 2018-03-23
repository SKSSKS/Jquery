(function($)
{
    $.fn.targetBlank = function()
    {
        var targetArray = ["_blank","_self","_top","_parent"]
        var target = jQuery.trim($(this).attr("target"));

        if(target == undefined)
        {
            $(this).attr("target","_blank");
        }
    }
})(jQuery);