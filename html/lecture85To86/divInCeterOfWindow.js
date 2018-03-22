$(document).ready(function()
{
    function move_div()
    {
        window_width = $(window).width();
        window_height = $(window).height();

        obj_width = $("#div").width();
        obj_height = $("#div").height();
        
        x_pos = window_width/2 - obj_width/2;
        y_pos = window_height/2 - obj_height/2;

        $("#div").css("top",y_pos).css("left",x_pos);
    }
    
    move_div();
    $(window).resize(function()
    {
        move_div();
    });
})