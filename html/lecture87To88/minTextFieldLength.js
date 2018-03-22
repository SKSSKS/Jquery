$(document).ready(function()
{
    $("input[type='text']").focus(function()
    {
        this_obj = $(this);

        min_length = this_obj.attr("minlength");
        var len = this_obj.val().length;
            if( len < min_length )
            {
                this_obj.after("<span>"+ min_length+" character remaining" +"</span>")
            }
    }).keyup(function()
    {
        if(len >= min_length)
        {
            this_obj.next().remove();
        }
    }).blur(function()
    {
        this_obj.next().remove();
    })
})