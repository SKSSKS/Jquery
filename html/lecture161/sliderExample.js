var min_value = 1;
var max_val = 500;
$("#slider").slider(
{
    slide:function(event,ui)
    {
        $("#slider_value").html("&pound;"+ui.value);
    },
    min:1,
    max:500,

});